import React from "react";
import { Field } from "react-final-form";
import "../styles/formStyles.css";

const PersonalInfo = () => {
  return (
    <div>
      <h2 className="title">Personal Info</h2>
      <p className="description">
        Please provide your name, email address, and phone number.
      </p>
      <div>
        <div className="form-group">
          <Field name={"name"}>
            {({ input, meta }) => (
              <>
                <label htmlFor="name">
                  Name {meta.error && meta.touched && <span>{meta.error}</span>}
                </label>
                <input
                  className={`${meta.error && meta.touched && "error"}`}
                  {...input}
                  type="text"
                  placeholder="e.g. Stephen King"
                />
              </>
            )}
          </Field>
        </div>
        <div className="form-group">
          <Field name={"email"}>
            {({ input, meta }) => (
              <>
                <label htmlFor="email">
                  Email Address{" "}
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </label>
                <input
                  className={`${meta.error && meta.touched && "error"}`}
                  {...input}
                  type="email"
                  placeholder="e.g. stephenking@lorem.com"
                />
              </>
            )}
          </Field>
        </div>
        <div className="form-group">
          <Field name={"phone"}>
            {({ input, meta }) => (
              <>
                <label htmlFor="phone">
                  Phone Number{" "}
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </label>
                <input
                  className={`${meta.error && meta.touched && "error"}`}
                  {...input}
                  type="text"
                  placeholder="e.g. +1 234 567 890"
                />
              </>
            )}
          </Field>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
