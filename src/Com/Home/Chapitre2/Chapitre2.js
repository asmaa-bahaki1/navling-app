import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import leçon from './lecon.gif';

export default function Chapitre2() {
	const questions = [
		{
			questionText: 'Why ________ (to call / not) us yesterday ?',
			answerOptions: [
				{ answerText: 'didn’t you call', isCorrect: true },
				{ answerText: 'You call', isCorrect: false }, 
			],
		},
		{
			questionText: 'Which animal ________ (to sleep) the most ?',
			answerOptions: [
				{ answerText: 'sleeps', isCorrect: true },
				{ answerText: 'sleep', isCorrect: false},
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
