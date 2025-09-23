import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import * as worldData from "../../data/countries-110m.json";
import styles from "./dashboard.module.css";
import useMetrics from "../../hooks/useMetrics";

export default function LocationWise({ isLoading }) {
  const svgRef = useRef();
  const tooltipRef = useRef();
  const width = 200;
  const height = 120;
  if (isLoading) {
    return <Skeleton width={200} height={120} />;
  }
  const { charts } = useMetrics();
  const { revenueByLocation } = charts;

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const tooltip = d3.select(tooltipRef.current);

    const projection = d3
      .geoNaturalEarth1()
      .scale(width / 1.3 / Math.PI)
      .translate([width / 2, height / 2]);

    const path = d3.geoPath(projection);

    // Draw countries
    const countries = topojson.feature(
      worldData,
      worldData.objects.countries
    ).features;

    svg
      .selectAll("path")
      .data(countries)
      .join("path")
      .attr("d", path)
      .attr("fill", "#A8C5DA")
      .attr("stroke", "#FFFFFF")
      .attr("stroke-width", 0.25);

    svg
      .selectAll("circle")
      .data(revenueByLocation)
      .join("circle")
      .attr("cx", (d) => projection(d.coords)[0])
      .attr("cy", (d) => projection(d.coords)[1])
      .attr("r", 2)
      .attr("fill", "#000000")
      .on("mouseenter", (event, d) => {
        tooltip
          .style("opacity", 1)
          .style("left", `${event.pageX + 5}px`)
          .style("top", `${event.pageY - 20}px`)
          .text(d.name);
      })
      .on("mouseleave", () => tooltip.style("opacity", 0));
  }, [isLoading, revenueByLocation]);

  return (
    <div className={styles.locationMapWrapper}>
      <span className={styles.title}>Revenue by Location</span>
      <div className={styles.locationMapContainer}>
        <svg ref={svgRef} width={width} height={height} />
        <div ref={tooltipRef} className={styles.locationMapTooltip} />
      </div>

      <div className={styles.locationMapBars}>
        {revenueByLocation.map((loc) => (
          <div key={loc.name} className={styles.locationMapBarWrapper}>
            <div className={styles.locationMapBarLabel}>
              <span>{loc.name}</span>
              <span>{(loc.revenue / 1000).toFixed(0)}K</span>
            </div>
            <div className={styles.locationMapBarBackground}>
              <div
                className={styles.locationMapBarForeground}
                style={{ width: `${(loc.revenue / 100000) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
