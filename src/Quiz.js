import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Startquiz() {
	return (
		<div className='start_container'>
			<div>
				<div>
					<h1>Take A Quick Style Quiz</h1>
				</div>
				<div>
					<p>This is a general style quiz that understand your needs and generate different outfits for you</p>
				</div>
			</div>
			<div>
				<Link to="/quizquestion"><button className='quiz_btn'>Start</button></Link>
			</div>
		</div>
	)
};

export function Quiz() {
	const [current, setCurrent] = useState(0);

	const questions = [
		{
			question: ' What age are you in?',
			answers: [
				{ answer: '1-10(kid)' },
				{ answer: '10-18 (teenager)' },
				{ answer: 'Adult  (18+)' },
			],
		},
		{
			question: 'What kind of color is your favorite ?',
			answers: [
				{ answer: 'cold' },
				{ answer: 'warm' },
				{ answer: 'light' },
				{ answer: 'mellow' },
				{ answer: 'glittering' }
			],
		},
		{
			question: 'What style do you like?',
			answers: [
				{ answer: 'High street' },
				{ answer: 'Laid-back' },
				{ answer: 'Minimalistic' },
				{ answer: 'Sexy' }
			],
		},
		{
			question: 'What sort of clothes are you looking for?',
			answers: [
				{ answer: 'men' },
				{ answer: 'women' },
				{ answer: 'unisex' },
			],
		},
	];

	const ClickNext = () => {
		const next = current + 1;
		if (next < questions.length) {
			setCurrent(next);
		}
	};

	const ClickPrev = () => {
		const pre = current - 1;
		if (current >= 1) {
			setCurrent(pre);
		}
	};


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
							<button key={answer.answer} className='quiz_choice' onClick={() => ClickNext()}>{answer.answer}</button>
						))}
					</div>
				</div>
				<div className='navi_container'>
					{current!==0 &&
						<button className='navi_btn' onClick={ClickPrev}>previous</button>
					}
					{current === 3 &&
					<Link to='/result'>
						<button className='navi_btn' onClick={ClickNext}>submit</button>
					</Link>
					}


				</div>
			</div>
		</div>

	)
}