import React, { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    question: 'What is your refund policy?',
    answer: 'Our refund policy allows you to request a refund within 30 days of purchase. Please contact support for more details.'
  },
  {
    question: 'How do I track my order?',
    answer: 'You can track your order by logging into your account and checking the order status. A tracking number will also be sent to your email.'
  },
  {
    question: 'Do you offer customer support?',
    answer: 'Yes, we offer 24/7 customer support. You can reach out to us via email or live chat on our website.'
  },
  {
    question: 'Can I change my order after it has been placed?',
    answer: 'You can request changes to your order within 24 hours of placing it. After this period, changes may not be possible.'
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <section id="faq">
        <div className="container">
          <div className="faq_wrapper">
            <div className="faq_col">
              <h2>Frequently Asked Questions</h2>
              <div className="faq_list">
                {faqData.map((faq, index) => (
                  <div key={index} className="faq_item">
                    <div className="faq_question" onClick={() => toggleAnswer(index)}>
                      <h3>{faq.question}</h3>
                      <span>{activeIndex === index ? '−' : '+'}</span>
                    </div>
                    {activeIndex === index && (
                      <div className="faq_answer">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
