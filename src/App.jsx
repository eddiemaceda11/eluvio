import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Hero from "./components/Hero";
import BusinessPlan from "./components/BusinessPlan";
import Faqs from "./components/Faqs";
import Reviews from "./components/Reviews";
import Companies from "./components/Companies";
import SignUp from "./components/SignUpComponents/SignUp";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Hero />
      <BusinessPlan />
      <SignUp />
      <Faqs />
      <Reviews />
      <Companies />
    </>
  );
}

export default App;
