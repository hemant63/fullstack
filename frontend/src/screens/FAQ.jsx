import './faq.css';
import  downArrow  from '../assests/down-arrow.png';
import { useState } from 'react';


const FAQ = ()=>{
    const [expandedIndex, setExpandedIndex] = useState(null);

  // Handle the toggle of the FAQ item
  const toggleFAQ = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);  // Collapse if the same item is clicked
    } else {
      setExpandedIndex(index); // Expand the clicked item
    }
  };
    const faqs = [
        {
          question: "Lorem ipsum dolor sit amet consectetur?",
          answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate maiores sunt perferendis consectetur perspiciatis. Architecto facere, ipsum omnis sint ad quae placeat minus, dolor impedit quam at veritatis, neque distinctio?"
        },
        {
          question: "Lorem ipsum dolor sit amet consectetur?",
          answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate maiores sunt perferendis consectetur perspiciatis. Architecto facere, ipsum omnis sint ad quae placeat minus, dolor impedit quam at veritatis, neque distinctio?"
        },
        {
          question: "Lorem ipsum dolor sit amet consectetur?",
          answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate maiores sunt perferendis consectetur perspiciatis. Architecto facere, ipsum omnis sint ad quae placeat minus, dolor impedit quam at veritatis, neque distinctio?"
        },
        {
          question: "Lorem ipsum dolor sit amet consectetur?",
          answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate maiores sunt perferendis consectetur perspiciatis. Architecto facere, ipsum omnis sint ad quae placeat minus, dolor impedit quam at veritatis, neque distinctio?"
        },
        {
          question: "Lorem ipsum dolor sit amet consectetur?",
          answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ipsa commodi cupiditate accusamus provident. Repellendus commodi recusandae nesciunt blanditiis iste!"
        },
        {
          question: "Lorem ipsum dolor sit amet consectetur?",
          answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo sint aspernatur exercitationem cumque aliquam! Quisquam assumenda repellat modi excepturi."
        },
        {
          question: "Lorem ipsum dolor sit amet consectetur?",
          answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos corrupti eveniet doloribus. Earum provident atque non magnam ab debitis, consequatur doloremque quidem sunt amet quisquam rem nam consequuntur natus eos corrupti doloribus possimus, blanditiis, aliquam nulla odio cum tenetur nesciunt? Quasi sit rerum quidem. Dignissimos officiis non quo facilis fuga."
        }
      ];
    return(
        <div className='faq'>
            <div className="faq-header">
                <h2><span>The</span> Frequently Asked Questions</h2>
                <p>Got Questions? We've Got Answers</p>
            </div>
            <div className='faq-body'>
                <div className='faq-left'>
                    <p>Contact Us</p>
                    <h3>FAQs</h3>
                    <p>Everything you need to know.</p>
                </div>
                <div className='faq-right'>
                {faqs.map((faq, index) => (
                    <div key={index}>
                        <div className={`question ${expandedIndex === index ? 'active' : ''}`} onClick={() => toggleFAQ(index)}>
                            <h4>{faq?.question}</h4>
                            <img src={downArrow} alt="" className={`arrow-icon ${expandedIndex === index ? 'rotated' : ''}`} />
                        </div>
                        <p className={`faq-answer ${expandedIndex === index ? 'show' : ''}`}>{faq?.answer}</p>
                        <hr />
                    </div>
                ))}

                </div>
            </div>
        </div>
    )
}

export default FAQ;