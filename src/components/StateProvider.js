import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

// wrap app in state provider and will provide data layer functionality
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

// helps us get data
export const useStateValue = () => useContext(StateContext);