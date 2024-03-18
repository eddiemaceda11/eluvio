import Step from "./Step";

import { type StepsObjProps } from "../FormContainer";

import { type StepsProps } from "../FormContainer";

const Steps = ({ steps }: StepsProps, currentStep: number) => {
  // console.log(stepssteps, "steps");
  return (
    <div className="steps">
      <ul>
        {steps.map((step) => (
          <Step
            key={step.step}
            step={step.step}
            label={step.label}
            // currentStep={currentStep}
          />
        ))}
      </ul>
    </div>
  );
};

export default Steps;
