import React, { useState } from "react";
import "./styles.css";
import arcade from "../../assets/images/icon-arcade.svg";
import advanced from "../../assets/images/icon-advanced.svg";
import pro from "../../assets/images/icon-pro.svg";
import plans from "./plans.json";

const SelectPlan = ({ selectedPlan, setPlan, subType, toggleSubType }) => {
  return (
    <div>
      <h2 className="title">Select your plan</h2>
      <p className="description">
        You have the option of monthly or yearly billing.
      </p>

      <div className="plans">
        {plans.map((plan) => (
          <button
            key={plan.option}
            type="button"
            className={`plan ${plan.option === selectedPlan ? "selected" : ""}`}
            onClick={() => setPlan(plan.option)}>
            <img
              src={
                plan.name === "Arcade"
                  ? arcade
                  : plan.name === "Advanced"
                  ? advanced
                  : pro
              }
              alt=""
            />
            <div>
              <p className="name">{plan.name}</p>
              <p className="price">
                ${plan.price[subType]}/{subType}
              </p>
              {subType === "yr" && <p className="yearly">2 months free</p>}
            </div>
          </button>
        ))}
      </div>

      <div className="plan-type">
        <p>Monthly</p>
        <button
          type="button"
          onClick={toggleSubType}
          className={`switcher ${subType === "yr" ? "switch" : ""}`}
        />
        <p>Yearly</p>
      </div>
    </div>
  );
};

export default SelectPlan;
