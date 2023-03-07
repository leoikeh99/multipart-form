import React from "react";
import "./styles.css";
import CheckIcon from "../../assets/images/icon-thank-you.svg";

const FinalMessage = () => {
  return (
    <div className="final-message">
      <img src={CheckIcon} alt="check-icon" />
      <h2>Thank you</h2>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default FinalMessage;
