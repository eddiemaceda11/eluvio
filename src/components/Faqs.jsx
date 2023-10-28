const faqsList = [
  {
    id: 0,
    question: "Can I try Eluvio for free?",
    answer: "Yes! You can try Eluvio’s free plan to get started, at no cost to you, and start earning.",
  },
  {
    id: 1,
    question: "Can I cancel my account at any time?",
    answer: "We hope you don’t, but of course you can! If you decide Eluvio is not right for you, simply cancel your account.",
  },
  {
    id: 2,
    question: "Can I change my plan once I sign up?",
    answer: "Yes. You can change your plan at any time from your Accounts admin. You’ll be charged the new plan amount at your next billing date.",
  },
  {
    id: 3,
    question: "Are there any transaction fees?",
    answer: "There are 0% transaction fees on the Pro and Business plans. The Basic plan has a 5% transaction fee. Free plan users pay $1 + 10% transaction fees. In addition, there are processing fees charged by payment processors like credit cards.",
  },
  {
    id: 4,
    question: "Who uses Eluvio?",
    answer:
      "Eluvio offers creators, influencers, entrepreneurs, and business owners the best, most flexible way to share and tap into the value of their experience and expertise with their audience and customers. Yoga instructors, musicians, financial advisors, watercolor artists, mountain climbers, product marketing coaches... you name it.",
  },
];

const Faqs = () => {
  return (
    <section className="faqs">
      <h2>Pricing FAQs</h2>
      {faqsList.map((element) => (
        <FaqsItem
          key={element.id}
          question={element.question}
          answer={element.answer}
        />
      ))}
    </section>
  );
};

const FaqsItem = ({ question, answer }) => {
  return (
    <div className="faqs-item">
      <div className="faqs-item-top">
        <p>{question}</p>
        <span>+</span>
      </div>
      {/* <p className="faqs-item-bottom">{answer}</p> */}
    </div>
  );
};

export default Faqs;
