import { useContext } from "react";
import { UIContext } from "../contexts/UIContext";
import { ChevronRightOutlined } from "@mui/icons-material";

export default function ThemeIcon({
  icon: IconComponent,
  expand = false,
  type = "default",
  style = {},
}) {
  const ExpandIcon = ChevronRightOutlined;
  return (
    <>
      {type == "sub-category" && (
        <ExpandIcon
          style={{
            transition: "transform 0.3s ease",
            transform: expand ? "rotate(90deg)" : "rotate(0deg)",
            verticalAlign: "middle",
            color: "var(--light)",
            fontSize: 16,
            ...style,
          }}
        />
      )}
      {IconComponent && (
        <IconComponent
          style={{
            color: "var(--primary-black)",
            colorSecondary: "var(--border-black)",
            margin: 4,
            verticalAlign: "middle",
            fontSize: 20,
          }}
        />
      )}
    </>
  );
}
