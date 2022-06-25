import React, { useContext, useReducer } from "react";
import reducer from "../reducers/app_reducer";

const initialState = {
  score: 0,
  playing: true,
  youChoose: " ",
  pcChoose: " ",
  wordInBtn:'',
};

const AppContext = React.createContext();
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const buttonHandler = () => {
    dispatch({ type: "SET_PLAYING" });
  };
  const resHandler = () => {
    dispatch({ type: "SET_RES" });
  };
  const rockHandler = () => {
    dispatch({ type: "ROCK" });
  };
  const paperHandler = () => {
    dispatch({ type: "PAPER" });
  };
  const scissorsHandler = () => {
    dispatch({ type: "SCISSORS" });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        buttonHandler,
        resHandler,
        rockHandler,
        paperHandler,
        scissorsHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useAppContext = () => {
  return useContext(AppContext);
};
