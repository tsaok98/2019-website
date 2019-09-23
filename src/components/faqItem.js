import React from 'react';

// import arrow from "./images/"
// need to import arrow svg from somewhere

const FAQItem = ({ question, answer }) => {
	return (
		<div>
			<div className="faq-item noselect"> </div>
			<div className="question">
				<div className="arrow-wrapper">{/* <img src="~assets/img/arrow.svg"></img> */}</div>
				<h4 className="title">{question}</h4>
			</div>
			{/* <transition name="slide-fade"> */}
			<div  className="answer">
				{answer}
			</div>
			{/* </transition> */}
		</div>
	);
};

export default FAQItem;
