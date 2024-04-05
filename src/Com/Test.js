import React, { useState } from 'react';
import './Test.css';
import leçon from './leçon.gif';
import { Link } from 'react-router-dom';

export default function Test() {
	const questions = [
		{
			questionText: 'café',
			answerOptions: [
				{ answerText: 'Please', isCorrect: false },
				{ answerText: 'Thank you', isCorrect: false },
				{ answerText: 'Coffee', isCorrect: true },
				{ answerText: 'Brother', isCorrect: false },
			],
		},
		{
			questionText: 'Telephone',
			answerOptions: [
				{ answerText: 'Phone', isCorrect: true },
				{ answerText: 'Problem', isCorrect: false},
				{ answerText: 'Option', isCorrect: false },
				{ answerText: 'Date', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
                    <img src={leçon} />
                    <h1>lesson finish</h1>  
                  <Link to='/'><button>Back To Home</button></Link>                   
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}