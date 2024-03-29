import { useState } from "react";

const Main = () => {
  // state for text value of email input box
  const [currentEmail, setCurrentEmail] = useState<string>("");

  return (
    <main>
      <div className="container">
        <div className="img-div">
          <img src="https://images.unsplash.com/photo-1654009603731-20b6d7536002?auto=format&fit=crop&q=80&w=2864&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
        <div className="text-div">
          <h1>Think ahead, and we'll help prepare you for the future</h1>
          <p>We help tech leaders achieve audience engagement, maximize revenue streams, and streamline spending for unparalleled success.</p>
          <p>Enter your email:</p>
          <div className="main-input-form">
            <input
              type="text"
              value={currentEmail}
              placeholder="hello@example.com"
              onChange={(e) => setCurrentEmail(e.target.value)}
            ></input>
            <button>Join for free</button>
          </div>
          <h5>*By submitting your email address, you agree to our Terms of use and Privacy Policy.</h5>
        </div>
      </div>
    </main>
  );
};

export default Main;
