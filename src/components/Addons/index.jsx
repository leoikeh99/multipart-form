import React, { useState } from "react";
import "../../styles/formStyles.css";
import "./styles.css";
import check from "../../assets/images/icon-checkmark.svg";
import addonList from "./addonList.json";

const Addons = ({ addons, setAddons, subType }) => {
  const toggleAddons = (option) => {
    setAddons(
      addons.some((val) => val === option)
        ? addons.filter((val) => val !== option)
        : [...addons, option]
    );
  };

  return (
    <div>
      <h2 className="title">Pick add-ons</h2>
      <p className="description">
        Add-ons help enhance your gaming experience.
      </p>
      <div className="addons">
        {addonList.map((addon) => (
          <button
            key={addon.option}
            className={`addon ${
              addons.some((val) => val === addon.option) && "checked"
            }`}
            type="button"
            onClick={() => toggleAddons(addon.option)}>
            <div>
              <span
                className={`checkbox ${
                  addons.some((val) => val === addon.option) && "checked"
                }`}>
                <img src={check} alt="" />
              </span>
              <span>
                <p className="name">{addon.name}</p>
                <p className="desc">{addon.desc}</p>
              </span>
            </div>
            <p className="price">
              +${addon.price[subType]}/{subType}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Addons;
