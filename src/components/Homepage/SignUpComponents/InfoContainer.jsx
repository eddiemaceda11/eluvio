import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import AddOns from "./AddOns";
import Summary from "./Summary";

const InfoContainer = ({ currentStep, onNextStep, onPrevStep }) => {
  return (
    <section className="info-container">
      {currentStep === 1 && <PersonalInfo onNextStep={onNextStep} />}
      {currentStep === 2 && (
        <SelectPlan
          onNextStep={onNextStep}
          onPrevStep={onPrevStep}
        />
      )}
      {currentStep === 3 && (
        <AddOns
          onNextStep={onNextStep}
          onPrevStep={onPrevStep}
        />
      )}
      {currentStep === 4 && <Summary onPrevStep={onPrevStep} />}
    </section>
  );
};

export default InfoContainer;
