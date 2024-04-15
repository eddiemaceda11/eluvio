import Cards from "./Cards";

const Hero = () => {
  return (
    <section className="hero">
      <h2 className="features-text">Industry-Leading Technology</h2>
      <h2>
        Flexible <span>pricing</span>
      </h2>
      <button>Start for free</button>
      <div className="subscription-length">
        <p className="inactive">Monthly</p>
        <p className="hero-active-subscription">Annual (save 15%)</p>
      </div>
      <Cards />
    </section>
  );
};

export default Hero;
