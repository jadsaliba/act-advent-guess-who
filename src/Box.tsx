import React, { useState } from "react";

interface BoxProps {
  id: number;
  question: string;
  correctName: string;
  onAnswer: (id: number, isCorrect: boolean) => void;
}

const Box: React.FC<BoxProps> = ({ id, question, correctName, onAnswer }) => {
  const [userAnswer, setUserAnswer] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = () => {
    const isAnswerCorrect =
      userAnswer.trim().toLowerCase() === correctName.toLowerCase();
    setIsAnswered(true);
    setIsCorrect(isAnswerCorrect);
    onAnswer(id, isAnswerCorrect);
  };

  return (
    <div className="box">
      <div className="question">{question}</div>
      {!isAnswered ? (
        <div>
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Enter name"
          />
          <button onClick={handleSubmit} disabled={userAnswer.trim() === ""}>
            Guess
          </button>
        </div>
      ) : (
        <div>
          {isCorrect ? (
            <>
              <span className="checkmark">✅</span>
              <div className="correct-answer">Your Answer: {correctName}</div>
            </>
          ) : (
            <>
              <span className="cross">❌</span>
              <div className="correct-answer">Your Answer: {userAnswer}</div>
              <div className="correct-answer">
                Correct Answer: {correctName}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Box;
