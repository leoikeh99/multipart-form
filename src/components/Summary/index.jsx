import React from "react";
import "./styles.css";
import plans from "../SelectPlan/plans.json";
import addonList from "../Addons/addonList.json";

const Summary = ({ data, jumpTo }) => {
  return (
    <div>
      <h2 className="title">Finishing up</h2>
      <p className="description">
        Double-check everything looks OK before confirming.
      </p>
      <ul className="summary">
        <li>
          <div>
            <p>
              {plans[data.selectedPlan - 1].name} (
              {data.subType === "mo" ? "Monthly" : "Yearly"})
            </p>
            <button type="button" onClick={() => jumpTo(2)}>
              Change
            </button>
          </div>
          <p className="darker">
            ${plans[data.selectedPlan - 1].price[data.subType]}/{data.subType}
          </p>
        </li>
        {data.addons.map((option) => (
          <li key={option}>
            <p>{addonList[option - 1].name}</p>
            <p>
              +${addonList[option - 1].price[data.subType]}/{data.subType}
            </p>
          </li>
        ))}
      </ul>
      <div className="total">
        <p>Total (per {data.subType === "mo" ? "month" : "year"})</p>
        <p>
          +$
          {data.addons.reduce(
            (a, b) => a + addonList[b - 1].price[data.subType],
            plans[data.selectedPlan - 1].price[data.subType]
          )}
          /{data.subType}
        </p>
      </div>
    </div>
  );
};

export default Summary;
