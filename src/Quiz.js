import React from 'react';
import { useState } from 'react';


function Startquiz(props){
    const start = () => props(true)
    return (
        <div>
            <h1>Take Style Quiz.</h1>
            <p>Understanding your needs and generate different outfits for you</p>
            <button onClick={start}>Start Quiz</button>
        </div>
    )
};


export function Quiz(props) {
    const questions = [
		{
			question: ' What age are you in?',
			answers: [
				{ answer: '1-10(kid)'},
				{ answer: '10-18 (teenager)'},
				{ answer: 'Adult  (18+)'},
			],
		},
		{
            question: 'What kind of color is your favorite ?',
			answers: [
				{ answer: 'cold'},
				{ answer: 'warm'},
				{ answer: 'light'},
                { answer: 'mellow'},
                { answer:  'glittering'}
			],
		},
		{
			question: 'What style do you like?',
			answers: [
				{ answer: 'High street'},
				{ answer: 'Laid-back'},
				{ answer: 'Minimalistic'},
                { answer: 'Sexy'}
			],
		},
		{
			question: 'What sort of clothes are you looking for?',
			answers: [
				{ answer: 'men'},
				{ answer: 'women'},
				{ answer: 'unisex'},
			],
		},
	];

    const handleQuestionClick = () => {
		const next = current + 1;
		if (next < questions.length) {
			setCurrent(next);
		} 
	};

    const [current, setCurrent] = useState(0);
    // const [count, setCount] = useState(0);
    // const [start, setStart] = useState(0);


    return (
        <div>
            <div className='questions_container'>
                        <div className='question'>
						<div>
                        Question {current + 1}/{questions.length}: 
                        {questions[current].question}
                        </div>
                        </div>
                        <div className='answers_container'>
                            <div>
				            {questions[current].answers.map((answer) => (
				            <button key={answer.answer} className='choice' onClick={() => handleQuestionClick()}>{answer.answer}</button>
						     ))}
                            </div>
					    </div>
            </div>
        </div>

    )}
