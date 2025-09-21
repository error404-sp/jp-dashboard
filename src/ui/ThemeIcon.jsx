import { useContext } from "react";
import { UIContext } from "../contexts/UIContext";
import { ChevronRightOutlined } from "@mui/icons-material";

export default function ThemeIcon({
  icon: IconComponent,
  expand = false,
  type = "default",
  style = {},
}) {
  const { state } = useContext(UIContext);
  const darkMode = state.theme === "dark";

  // Determine color
  const color = darkMode ? "#fff" : "#000";

  const ExpandIcon = ChevronRightOutlined;
  return (
    <>
      {type == "sub-category" && (
        <ExpandIcon
          style={{
            transition: "transform 0.3s ease",
            transform: expand ? "rotate(90deg)" : "rotate(0deg)",
            verticalAlign: "middle",
            color: "var(--border-black)",
            marginRight: 5,
            ...style,
          }}
        />
      )}
      {IconComponent && (
        <IconComponent
          style={{ color, marginRight: 8, verticalAlign: "middle" }}
        />
      )}
    </>
  );
}
