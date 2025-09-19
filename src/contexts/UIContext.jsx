import { createContext, useReducer } from "react";

export const UIContext = createContext();

const initialState = {};

const uiReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const UIProvider = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  return (
    <UIContext.Provider value={{ state, dispatch }}>
      {children}
    </UIContext.Provider>
  );
};
