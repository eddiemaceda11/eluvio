type SummaryProps = {
  onPrevStep: () => void;
};

const Summary = ({ onPrevStep }: SummaryProps) => {
  return (
    <div className="summary">
      <h1>Finishing up</h1>
      <p className="summary-text">Double-check everything looks OK before confirming</p>
      <div className="summary-info-container">
        <div className="top-info-summary">
          <p>
            Arcade (Monthly)
            <br />
            <span>Change</span>
          </p>
          <span>$9/mo</span>
        </div>
        {/* This will display any add ons from the prev step */}
        <div className="mid-info-summary-1">
          <p>Online Service</p>
          <span>$1/mo</span>
        </div>
        <div className="mid-info-summary-1">
          <p>Larger Storage</p>
          <span>$2/mo</span>
        </div>
      </div>
      <button
        className="plan-prev-step-btn"
        onClick={onPrevStep}
      >
        Go Back
      </button>
      <button className="plan-next-step-btn">Confirm</button>
    </div>
  );
};

export default Summary;
