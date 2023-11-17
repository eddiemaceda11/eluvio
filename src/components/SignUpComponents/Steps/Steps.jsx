const Steps = ({ steps, currentStep }) => {
  return (
    <div className="steps">
      <ul>
        {steps.map((step) => (
          <Step />
        ))}
      </ul>
    </div>
  );
};

export default Steps;
