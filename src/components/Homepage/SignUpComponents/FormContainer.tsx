import { useState } from "react";
import StepsContainer from "./Steps/StepsContainer";
import InfoContainer from "./InfoContainer";

export type StepsObjProps = {
  step: number;
  label: string;
};

export type StepsProps = {
  steps: StepsObjProps[];
};

export default function FormContainer({ steps }: StepsProps) {
  const [currentStep, setCurrentStep] = useState<number | undefined>(1);

  const nextStep = () => {
    setCurrentStep((prevState) => {
      if (prevState === 1) return 2;
      if (prevState === 2) return 3;
      if (prevState === 3) return 4;
      if (prevState === 4) return;
    });
  };

  const prevStep = () => {
    setCurrentStep((prevState) => {
      if (prevState === 1) return;
      if (prevState === 2) return 1;
      if (prevState === 3) return 2;
      if (prevState === 4) return 3;
    });
  };

  return (
    <section className="signup-section">
      <div className="signup-form-container">
        <StepsContainer
          steps={steps}
          currentStep={currentStep}
        />
        <InfoContainer
          currentStep={currentStep}
          onNextStep={nextStep}
          onPrevStep={prevStep}
        />
      </div>
    </section>
  );
}
