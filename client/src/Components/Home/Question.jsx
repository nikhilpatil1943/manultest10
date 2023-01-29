import React from "react";

import "./Question.css";
import Faq from "../../Images/Home/question.gif";

const content = [
  {
    que: "Why choose us?",
    ans: "We provide one stop solution to restaurant/café owners,from QR-based ordering to kitchen & staff portal, from admin panel for viewing outlet stats and other data. to marketing and remarketing, and many more.. we’ve everything covered for you. ",
  },
  {
    que: "How can I sign up?",
    ans: "You can mail us(mail button given in the bottom) with your Business name and the plan which you’ve selected.",
  },
  {
    que: "Can I get a Free trial?",
    ans: "Yes! You can use our free trial services for 15days (after that subscription fees may apply).",
  },
  {
    que: "Does the Foodie Bee help businesses to get higher Customer retention rate and improve customer experience?",
    ans: "Our online service based portal helps to improve overall customer experience and by using our Marketing and remarketing services you can easily get higher customer retention rate.",
  },
];
const Question = () => {
  return (
    <div className="Question">
      <div className="Question__titles">FAQ</div>
      <div className="Question__flex">
        <div>
          {content.map((item, index) => {
            return (
              <details key={index}>
                <summary>{item.que}</summary>
                <div className="Question__summary">{item.ans}</div>
              </details>
            );
          })}
        </div>
        <img src={Faq} alt="" />
      </div>
    </div>
  );
};

export default Question;
