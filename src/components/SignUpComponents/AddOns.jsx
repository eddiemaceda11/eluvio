import { useState } from "react";

const addOnsData = [
  {
    label: "Online service",
    desc: "Access to multiplayer games",
    addOnPrice: {
      monthly: "+$1/mo",
    },
  },
  {
    label: "Larger Storage",
    desc: "Extra 1TB of cloud save",
    addOnPrice: {
      monthly: "+$2/mo",
    },
  },
  {
    label: "Customizable Profile",
    desc: "Custom theme on your profile",
    addOnPrice: {
      monthly: "+$3/mo",
    },
  },
];

const AddOns = () => {
  return (
    <div className="add-ons">
      <h1>Pick add-ons</h1>
      <p className="plan-option-text">Add-ons help enhance your experience</p>
      <div className="add-on-items-container">
        {addOnsData.map((obj) => (
          <AddOnItem addOnsData={obj} />
        ))}
      </div>
      <button className="plan-prev-step-btn">Go Back</button>
      <button className="plan-next-step-btn">Next Step</button>
    </div>
  );
};

const AddOnItem = ({ addOnsData }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className={`add-on-item ${checked ? "add-on-checked" : ""}`}>
      <input
        type="checkbox"
        onChange={() => setChecked(!checked)}
      />
      <div className="add-ons-desc">
        <p>{addOnsData.label}</p>
        <span>{addOnsData.desc}</span>
      </div>
      <p className="pick-add-ons-price">{addOnsData.addOnPrice.monthly}</p>
    </div>
  );
};

export default AddOns;
