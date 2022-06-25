import React from "react";
import rock from "../assets/images/icon-rock.svg";
import paper from "../assets/images/icon-paper.svg";
import scissors from "../assets/images/icon-scissors.svg";
import "./Play.css";
import { useAppContext } from "../context/app-context";

const Play = () => {
  const {
    playing,
    buttonHandler,
    rockHandler,
    paperHandler,
    scissorsHandler,
    youChoose,
    pcChoose,
    wordInBtn,
  } = useAppContext();

  return (
    <>
      {playing && (
        <div className="triangle">
          <div className="top">
            <img onClick={rockHandler} id="rock" src={rock} alt="rock" />
            <img onClick={paperHandler} id="paper" src={paper} alt="paper" />
          </div>
          <div className="bottom">
            <img
              onClick={scissorsHandler}
              id="scissors"
              src={scissors}
              alt="scissors"
            />
          </div>
        </div>
      )}
      {!playing && (
        <div className="res">
          <div className="you">
            {youChoose === "rock" ? (
              <img id="rock" src={rock} alt="rock" />
            ) : null}
            {youChoose === "paper" ? (
              <img id="paper" src={paper} alt="paper" />
            ) : null}
            {youChoose === "scissors" ? (
              <img id="scissors" src={scissors} alt="scissors" />
            ) : null}
          </div>
          <div className="btn">
            <button onClick={buttonHandler}>{wordInBtn}</button>
          </div>
          <div className="pc">
            {pcChoose === "rock" ? (
              <img id="rock" src={rock} alt="rock" />
            ) : null}
            {pcChoose === "paper" ? (
              <img id="paper" src={paper} alt="paper" />
            ) : null}
            {pcChoose === "scissors" ? (
              <img id="scissors" src={scissors} alt="scissors" />
            ) : null}
          </div>
        </div>
      )}
    </>
  );
};

export default Play;
