import { useState } from "react";
import StepsContainer from "./Steps/StepsContainer";
import InfoContainer from "./InfoContainer";

export default function FormContainer({ steps }) {
  const [currentStep, setCurrentStep] = useState(1);

  // const changeCurrentStep = () => {
  //   setCurrentStep((prevState) => {
  //     if (prevState === 1) return 2;
  //     if (prevState === 2) return 3;
  //     if (prevState === 3) return 4;
  //     if (prevState === 4) return 1;
  //   });
  // };

  return (
    <section className="signup-section">
      <div className="signup-form-container">
        <StepsContainer
          steps={steps}
          currentStep={currentStep}
          // onClick={changeCurrentStep}
        />
        <InfoContainer currentStep={currentStep} />
      </div>
    </section>
  );
}
