const Main = () => {
  return (
    <main>
      <div className="img-div">
        <img src="https://images.unsplash.com/photo-1654009603731-20b6d7536002?auto=format&fit=crop&q=80&w=2864&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
      <div className="text-div">
        <h1>Think ahead, and we'll help prepare you for the future</h1>
        <p>
          We help leaders engage their online audiences and get <br />
          paid on their own terms with courses, coaching, and downloadable content.
        </p>
        <p>Enter your email:</p>
        <div className="main-input-form">
          <input
            type="text"
            value="hello@example.com"
          ></input>
          <button>Join for free</button>
        </div>
        <h5>*By submitting your email address, you agree to our Terms of use and Privacy Policy.</h5>
      </div>
    </main>
  );
};

export default Main;
