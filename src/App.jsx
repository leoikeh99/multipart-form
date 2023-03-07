import React, { useState } from "react";
import { Form } from "react-final-form";
import Addons from "./components/Addons";
import FinalMessage from "./components/Final";
import Navigation from "./components/Navigation";
import PersonalInfo from "./components/PersonalInfo";
import SelectPlan from "./components/SelectPlan";
import SidePanel from "./components/SidePanel";
import Summary from "./components/Summary";
import "./styles/appStyles.css";
import { validate } from "./utlis";

function App() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    selectedPlan: 1,
    subType: "mo",
    addons: [],
  });

  const onSubmit = () => setStep((val) => val + 1);
  const goBack = () => step !== 1 && setStep((val) => val - 1);
  const jumpTo = (step) => setStep(step);
  const setPlan = (option) => setData({ ...data, selectedPlan: option });
  const toggleSubType = () =>
    setData({ ...data, subType: data.subType === "mo" ? "yr" : "mo" });
  const setAddons = (option) => setData({ ...data, addons: option });

  return (
    <main>
      <SidePanel step={step} />
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form className="form-section" onSubmit={handleSubmit}>
            {step === 1 && <PersonalInfo />}
            {step === 2 && (
              <SelectPlan
                selectedPlan={data.selectedPlan}
                setPlan={setPlan}
                subType={data.subType}
                toggleSubType={toggleSubType}
              />
            )}
            {step === 3 && (
              <Addons
                addons={data.addons}
                setAddons={setAddons}
                subType={data.subType}
              />
            )}
            {step === 4 && <Summary data={data} jumpTo={jumpTo} />}
            {step === 5 && <FinalMessage />}
            {step !== 5 && <Navigation goBack={goBack} step={step} />}
          </form>
        )}
      />
    </main>
  );
}

export default App;
