import React from "react";
import "./styles.css";
import "../../styles/formStyles.css";

const Navigation = ({ goBack, step }) => {
  return (
    <div className="navigation">
      {step !== 1 && (
        <button className="btn btn-secondary" type="button" onClick={goBack}>
          Go Back
        </button>
      )}
      <button
        className={`btn btn-${step !== 4 ? "primary" : "confirm"}`}
        type="submit">
        {step !== 4 ? "Next Step" : "Confirm"}
      </button>
    </div>
  );
};

export default Navigation;
