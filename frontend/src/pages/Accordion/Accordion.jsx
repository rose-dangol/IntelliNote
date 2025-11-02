import React, { useState } from 'react';
import './Accordion.css';
// import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';
import Sidebar from "../../components/Sidebar/Sidebar";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What is Quantum Entanglement?",
      answer: "Quantum Entanglement is a phenomenon where particles become interconnected so that the state of one instantly influences the state of another, regardless of the distance separating them. This challenges classical ideas of locality and causality."
    },
    {
      question: "What does Nonlocality mean in quantum physics?",
      answer: "Nonlocality refers to the property that entangled particles exhibit correlations that cannot be explained by signals traveling at or below the speed of light, implying instantaneous connections across space. It defies classical notions of cause and effect limited by distance."
    }
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Sidebar/>
      <h1>Your Saved Notes</h1>
      <p className="description">
        Manage all your saved notes from one space.
      </p>
      <div className="accordion-container">
        {faqData.map((item, index) => (
          <div key={index} className="accordion-item">
            <button
              className={`accordion-header ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleToggle(index)}
            >
              {item.question}
              <i className="fa-solid fa-chevron-down icon"></i>
            </button>
            <div
              className="accordion-content"
              style={{
                maxHeight: activeIndex === index ? '500px' : '0'
              }}
            >
              <div className="accordion-body">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Accordion;