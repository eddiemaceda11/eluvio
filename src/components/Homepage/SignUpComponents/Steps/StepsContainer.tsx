import Steps from "./Steps";

import { type StepsProps } from "../FormContainer";

const StepsContainer = ({ steps }: StepsProps, currentStep: number) => {
  return (
    <div className="steps-container">
      <Steps
        steps={steps}
        currentStep={currentStep}
      />
    </div>
  );
};

export default StepsContainer;
