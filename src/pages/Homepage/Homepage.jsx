import Header from "../../components/Homepage/Header/Header.tsx";
import Main from "../../components/Homepage/MainSection/Main";
import Hero from "../../components/Homepage/Hero";
import BusinessPlan from "../../components/Homepage/BusinessPlan";
import Faqs from "../../components/Homepage/Faqs";
import Reviews from "../../components/Homepage/Reviews";
import Companies from "../../components/Homepage/Companies/Companies";
import SignUp from "../../components/Homepage/SignUpComponents/SignUp";
import Chatbot from "../../components/Homepage/ChatBot/Chatbot";

function Homepage() {
  return (
    <>
      <Header />
      <Main />
      <Hero />
      <BusinessPlan />
      <SignUp />
      <Faqs />
      {/* <Reviews /> */}
      <Companies />
      <Chatbot />
    </>
  );
}

export default Homepage;
