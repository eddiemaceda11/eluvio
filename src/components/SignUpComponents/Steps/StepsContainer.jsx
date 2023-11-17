const StepsContainer = ({ steps, currentStep, onClick }) => {
  return (
    <div
      className="steps-container"
      onClick={onClick}
    >
      <Steps
        steps={steps}
        currentStep={currentStep}
      />
    </div>
  );
};
