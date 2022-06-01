import React from 'react';
import { useState } from 'react';

export function Quiz(props) {
    const questions = [
		{
			question: 'What age are you in?',
			answers: [
				{ answer: '1-10(kid)'},
				{ answer: '10-18 (teenager)'},
				{ answer: '(18+) Adult'},
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

    const [currentQuestion, setCurrentQuestion] = useState(0);

    return (
        <div>
            <h1>Take Your Style Quiz</h1>
            <main>
            <div className='questions'>
            <div className='question'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question'>{questions[currentQuestion].question}</div>
                </div>
            </main>
        </div>

    )}
