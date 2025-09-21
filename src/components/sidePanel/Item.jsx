import { useContext, useState } from "react";
import ThemeIcon from "../../ui/ThemeIcon";
import { NavLink } from "react-router-dom";
import styles from "./sidePanel.module.css";
import { DataContext } from "../../contexts/DataContext";

const Item = ({ item, level = 1 }) => {
  const [expand, setExpand] = useState(false);
  const { state, dispatch } = useContext(DataContext);

  const handleClick = () => {
    switch (item.type) {
      case "page":
        dispatch({ type: "SET_ACTIVE_PAGE", payload: item });
        break;
      case "sub-category":
        setExpand((val) => !val);
        break;
      default:
        break;
    }
  };

  const renderItem = (item) => {
    switch (item.type) {
      case "category":
        return (
          <>
            <div className={styles.categoryItem}>{item.label}</div>
            {item.children?.map((child) => (
              <Item key={child.id} item={child} level={level + 1} />
            ))}
          </>
        );
      case "sub-category":
        return (
          <>
            <div onClick={handleClick} className={styles.subCategItem}>
              <ThemeIcon icon={item.icon} type={item.type} expand={expand} />
              {item.label}
            </div>
            {expand &&
              item.children?.map((child) => (
                <Item key={child.id} item={child} level={level + 1} />
              ))}
          </>
        );
      case "page":
        return (
          <div className={styles.pageItem}>
            <NavLink
              to={item.path}
              onClick={() =>
                dispatch({ type: "SET_ACTIVE_PAGE", payload: item })
              }
            >
              {item.icon && (
                <ThemeIcon
                  icon={item.icon}
                  expand={Boolean(state.activePage)}
                />
              )}
              {item.label}
            </NavLink>
          </div>
        );

      default:
        return null;
    }
  };

  return <div style={{ marginLeft: level * 8 }}>{renderItem(item)}</div>;
};

export default Item;
