import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import AddOns from "./AddOns";
import Summary from "./Summary";

const InfoContainer = ({ currentStep }) => {
  return (
    <section className="info-container">
      {currentStep === 1 && <PersonalInfo />}
      {currentStep === 2 && <SelectPlan />}
      {currentStep === 3 && <AddOns />}
      {currentStep === 4 && <Summary />}
    </section>
  );
};

export default InfoContainer;
