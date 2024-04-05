import React, { useState } from 'react';
import './Test.css';
import leçon from './leçon.gif';
import { Link } from 'react-router-dom';

export default function Testque() {
	const questions = [
		{
			questionText: 'How old are you? I ________',
			answerOptions: [
				{ answerText: 'have 30', isCorrect: false },
				{ answerText: 'have 30 years', isCorrect: false },
				{ answerText: 'am 30 years', isCorrect: false },
				{ answerText: 'am 30 years old', isCorrect: true },
			],
		},
		{
			questionText: 'Please, _________ you speak slower ?',
			answerOptions: [
				{ answerText: 'Do', isCorrect: true },
				{ answerText: 'Could', isCorrect: false},
				{ answerText: 'Will', isCorrect: false },
				{ answerText: 'Are', isCorrect: false },
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