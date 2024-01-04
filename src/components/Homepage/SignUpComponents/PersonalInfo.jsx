const PersonalInfo = ({ onNextStep }) => {
  return (
    <div className="personal-info">
      <h1>Personal Info</h1>
      <p>Please provide your name, email, address, and phone number</p>
      <form>
        <div className="divvy">
          <label>Name</label>
          <input
            type="text"
            placeholder="e.g. Stephen King"
          />
        </div>
        <div>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="e.g. +1 234 567 8900"
          />
        </div>
      </form>
      <button
        className="plan-next-step-btn"
        onClick={onNextStep}
      >
        Next Step
      </button>
    </div>
  );
};

export default PersonalInfo;
