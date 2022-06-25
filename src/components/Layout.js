import React, { useState } from "react";
import "./Layout.css";
import imageRules from "../assets/images/image-rules.svg";
import closeIcon from "../assets/images/icon-close.svg";
import Logo from "../assets/images/logo.svg";
import { useAppContext } from "../context/app-context";

function Layout(props) {
  const { score } = useAppContext();
  const [openRules, setOpenRules] = useState(false);
  const showRules = () => {
    setOpenRules(true);
  };

  return (
    <>
      <div className="container">
        <div className="game-name">
          <img src={Logo} alt="game-name" />
        </div>
        <div className="score">
          <div className="title">Score</div>
          <div className="number">{score}</div>
        </div>
      </div>
      <div className="rules-btn" onClick={showRules}>
        Rules
      </div>
      {openRules && (
        <div id="overlay">
          <div className="rules">
            <div className="close">
              <h2>Rules</h2>
              <img
                onClick={() => {
                  setOpenRules(false);
                }}
                id="close-btn"
                src={closeIcon}
                alt="close"
              />
            </div>

            <img src={imageRules} alt="rules" />
          </div>
        </div>
      )}
    </>
  );
}

export default Layout;
