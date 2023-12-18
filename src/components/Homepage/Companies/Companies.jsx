import Company from "./Company";
import "./Companies.css";

const Companies = () => {
  return (
    <section className="companies">
      <div className="logos">
        <Company />
        <Company />
      </div>
    </section>
  );
};

export default Companies;
