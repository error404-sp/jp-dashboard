import { createContext, useEffect, useReducer } from "react";
import { uiInitState, uiReducer } from "./uiReducer";

export const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    uiReducer,
    uiInitState,
    (initialState) => {
      const savedState = localStorage.getItem("uiState");
      return savedState
        ? { ...initialState, ...JSON.parse(savedState) }
        : initialState;
    }
  );

  useEffect(() => {
    const root = document.documentElement;
    if (state.theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem(
      "uiState",
      JSON.stringify({ theme: state.theme, sidePanel: state.sidePanel })
    );
  }, [state.theme, state.sidePanel]);

  useEffect(() => {
    let timeoutId;
    function handleResize() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const width = window.innerWidth;
        let breakPoint = "desktop";
        if (width <= 640) breakPoint = "mobile";
        else if (width <= 1024) breakPoint = "tablet";
        dispatch({ type: "SET_BREAKPOINT", payload: breakPoint });
      }, 100);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <UIContext.Provider value={{ state, dispatch }}>
      {children}
    </UIContext.Provider>
  );
};
