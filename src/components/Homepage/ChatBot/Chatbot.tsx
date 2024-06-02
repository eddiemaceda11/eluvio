import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";
import "./chatbot.css";

// Fetch the API key
const genAI = new GoogleGenerativeAI("AIzaSyCMUesgAi9jqnCoHlxg58C4OsSpaJC-lhM");

// Access the API key
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const Chatbot = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [aiResponse, setResponse] = useState("");
  const [chatIsOpen, setChatIsOpen] = useState(false);
  console.log(chatIsOpen);

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // Generative AI Call to fetch response
  async function aiRun() {
    setLoading(true);
    const prompt = search; // user input
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    setResponse(text);
    setLoading(false);
  }

  // button event trigger to consume gemini Api
  const handleClick = () => {
    aiRun();
  };

  return (
    <>
      <div className={chatIsOpen ? "chatbot-widget-container active" : "chatbot-widget-container"}>
        <div className="chatbot-widget">
          <header></header>
          <section>
            <p className="incoming">HI</p>
            <p className="outgoing">Can you please help</p>
            {loading === false && !aiResponse ? "" : loading === true && search != "" ? <p className="incoming">Loading</p> : <p className="incoming">{aiResponse}</p>}
          </section>
          <input
            type="text"
            placeholder="Search Food with Category using Generative AI"
            onChange={(e) => handleChangeSearch(e)}
          ></input>
          <button onClick={() => handleClick()}></button>
        </div>
      </div>
      <button
        className="open-chat"
        onClick={() => setChatIsOpen(!chatIsOpen)}
      >
        <i className="fa-solid fa-comment-dots"></i>
      </button>
    </>
  );
};

export default Chatbot;
