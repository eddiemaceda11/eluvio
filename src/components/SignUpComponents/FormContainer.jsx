import { useState } from "react";
import StepsContainer from "./Steps/StepsContainer";

export default function FormContainer({ steps }) {
  const [currentStep, setCurrentStep] = useState(1);

  const changeCurrentStep = () => {
    setCurrentStep((prevState) => (prevState === 1 ? 2 : 1));
  };

  return (
    <section className="form-container">
      <StepsContainer
        steps={steps}
        currentStep={currentStep}
        onClick={changeCurrentStep}
      />
      <InfoContainer />

      {/* <InfoContainer currentStep={currentStep} /> */}
    </section>
  );
}
