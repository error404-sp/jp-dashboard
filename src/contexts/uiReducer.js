export const uiInitState = {
  theme: "light",
  sidePanel: true,
  rightPanel: false,
  showNotif: true,
  showRecent: true,
  breakpoint: "desktop",
};

export const uiReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };

    case "TOGGLE_SIDEPANEL":
      return { ...state, sidePanel: !state.sidePanel };

    case "TOGGLE_RIGHTPANEL":
      return { ...state, rightPanel: !state.rightPanel };

    case "CLOSE_SIDE_PANEL":
      return { ...state, sidePanel: false };

    case "CLOSE_RIGHT_PANEL":
      return { ...state, rightPanel: false };

    case "SET_BREAKPOINT":
      const payload = action.payload;
      return {
        ...state,
        breakpoint: payload,
        sidePanel: payload === "mobile" ? false : state.sidePanel,
        rightPanel: false,
      };

    case "TOGGLE_NOTIFS":
      return { ...state, showNotif: !state.showNotif };

    case "TOGGLE_RECENT":
      return { ...state, showRecent: !state.showRecent };

    default:
      return state;
  }
};
