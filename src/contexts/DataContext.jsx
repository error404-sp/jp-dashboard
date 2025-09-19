import { createContext, useReducer } from "react";

export const DataContext = createContext();

const initialState = {
  orders: [],
};

const dataReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
