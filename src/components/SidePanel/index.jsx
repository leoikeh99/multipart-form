import React from "react";
import "./styles.css";

const SidePanel = ({ step }) => {
  return (
    <div className="side-panel">
      <ul>
        <li>
          <span className={step === 1 ? "active" : ""}>1</span>
          <div>
            <p>STEP 1</p>
            <p>YOUR INFO</p>
          </div>
        </li>
        <li>
          <span className={step === 2 ? "active" : ""}>2</span>
          <div>
            <p>STEP 2</p>
            <p>SELECT PLAN</p>
          </div>
        </li>
        <li>
          <span className={step === 3 ? "active" : ""}>3</span>
          <div>
            <p>STEP 3</p>
            <p>ADD-ONS</p>
          </div>
        </li>
        <li>
          <span className={step === 4 ? "active" : ""}>4</span>
          <div>
            <p>STEP 4</p>
            <p>SUMMARY</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SidePanel;
