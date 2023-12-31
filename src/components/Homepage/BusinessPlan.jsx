const BusinessPlan = () => {
  return (
    <section className="business-plan">
      <div className="business-left">
        <h2>Enterprise Plan</h2>
        <h3>Our most advanced leaders deserve our most advanced feature yet. Scale your enterprise on the Enterprise plan.</h3>
        <div>
          $499
          <span>/month</span>
        </div>
        <p>$5,998 billed annually</p>
      </div>
      <div className="business-right">
        <h2>Enterprise</h2>
        <h3>All Pro + plan features plus:</h3>
        <ul>
          <div>
            <i className="fa-regular fa-circle-check"></i>
            <li>Unlimited support, exclusive products, and digital downloads</li>
          </div>
          <div>
            <i className="fa-regular fa-circle-check"></i>
            <li>20 admin & user accounts</li>
          </div>
          <div>
            <i className="fa-regular fa-circle-check"></i>
            <li>Advanced theme customizations</li>
          </div>
          <div>
            <i className="fa-regular fa-circle-check"></i>
            <li>Custom user roles</li>
          </div>
          <div>
            <i className="fa-regular fa-circle-check"></i>
            <li>Access to exclusive events and webinars</li>
          </div>
        </ul>
        <button onClick={() => console.log("hi")}>Select Enterprise</button>
        <p>Or select business monthly - $699/month</p>
      </div>
      <p className="business-plan-terms">
        Our plans will automatically renew until canceled. Recurring charges may be subject to changes.
        <br />
        Plans can be canceled any time. Standard processing fees apply. Have questions? Contact support@eluvio.com
      </p>
      <p className="compare">Compare all plan features ↓</p>
    </section>
  );
};

export default BusinessPlan;
