const Step = ({ step, currentStep }) => {
  return (
    <li
      key={step.step}
      className="step"
    >
      <p className={step.step === currentStep ? "num num-active" : "num"}>{step.step}</p>
      <div className="step-info-div">
        <p className="step-num">STEP {step.step}</p>
        <p className="step-text">{step.label.toUpperCase()}</p>
      </div>
    </li>
  );
};

export default Step;
