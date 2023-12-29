import { useContext } from "react";
import { WindowContext } from "../../context/WindowContext";

// const CardInfo = ({features, fee, audience, builder, refferals, finance, admins, cancel}) => {
//   <>
//     {features}
//     <div>
//       <i className="fa-regular fa-circle-check"></i>
//       <li>$1 + 10% transaction fee</li>
//     </div>
//     <div>
//       <i className="fa-regular fa-circle-check"></i>
//       <li>1 published audience of each category (social, organic, members)</li>
//     </div>
//     <div>
//       <i className="fa-regular fa-circle-check"></i>
//       <li>No-code course builder and web pages</li>
//     </div>
//     <div>
//       <i className="fa-regular fa-circle-check"></i>
//       <li>Member referrals</li>
//     </div>
//     <div>
//       <i className="fa-regular fa-circle-check"></i>
//       <li>Finance with integrated payment processing</li>
//     </div>
//     <div>
//       <i className="fa-regular fa-circle-check"></i>
//       <li>1 admin & 3 users</li>
//     </div>
//     <div>
//       <i className="fa-regular fa-circle-check"></i>
//       <li>No-charge cancellation</li>
//     </div>
//   </>;
// };

const Card = ({ plan, planDesc, price, terms, features }) => {
  const { windowSize } = useContext(WindowContext); // git import useContext and WindowContext
  console.log(`current is ${windowSize}`);
  return (
    <div className="card">
      <h2>{plan}</h2>
      <h3>{planDesc}</h3>
      <div className="price">
        ${price}
        <span>/month</span>
      </div>
      <p>{terms}</p>
      <button>Select {plan}</button>
      {windowSize[0] > 850 && (
        <>
          <div className="card-border"></div>
          <ul className="card-info">
            {features}
            <div>
              <i className="fa-regular fa-circle-check"></i>
              <li>$1 + 10% transaction fee</li>
            </div>
            <div>
              <i className="fa-regular fa-circle-check"></i>
              <li>1 published audience of each category (social, organic, members)</li>
            </div>
            <div>
              <i className="fa-regular fa-circle-check"></i>
              <li>No-code course builder and web pages</li>
            </div>
            <div>
              <i className="fa-regular fa-circle-check"></i>
              <li>Member referrals</li>
            </div>
            <div>
              <i className="fa-regular fa-circle-check"></i>
              <li>Finance with integrated payment processing</li>
            </div>
            <div>
              <i className="fa-regular fa-circle-check"></i>
              <li>1 admin & 3 users</li>
            </div>
            <div>
              <i className="fa-regular fa-circle-check"></i>
              <li>No-charge cancellation</li>
            </div>
          </ul>{" "}
        </>
      )}
    </div>
  );
};

//cards
const Cards = () => {
  return (
    <section className="cards">
      <Card
        plan="Free"
        planDesc="Try it out and start earning before you pay - No fees attached"
        price="0"
        terms="No credit card required"
        features="Free plan features include:"
      />
      <Card
        plan="Basic"
        planDesc="The foundational tools and support you need to build your business."
        price="39"
        terms="$899 billed annually"
        features="All Free plan features plus:"
      />
      <Card
        plan="Pro"
        planDesc="Advanced tools and more support to help you scale and grow."
        price="119"
        terms="$1,999 billed annually"
        features="All Basic plan features plus:"
      />
      <Card
        plan="Pro+"
        planDesc="More products and custom user roles for fast-growing businesses."
        price="199"
        terms="$2,999 billed annually"
        features="All Pro plan features plus:"
      />
    </section>
  );
};

export default Cards;
