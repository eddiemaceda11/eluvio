import Step from "./Step";

const Steps = ({ steps, currentStep }) => {
  return (
    <div className="steps">
      <ul>
        {steps.map((step) => (
          <Step step={step} />
        ))}
      </ul>
    </div>
  );
};

export default Steps;
