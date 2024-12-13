import React, { useState, useEffect, useRef } from "react";
import Box from "./Box";
import "./App.css";

const questionsData = [
  { question: "Who is the CEO of Tesla?", correctName: "Elon Musk" },
  { question: 'Who wrote the book "1984"?', correctName: "George Orwell" },
  { question: "Who painted the Mona Lisa?", correctName: "Leonardo da Vinci" },
  { question: "Who is the founder of Microsoft?", correctName: "Bill Gates" },
  {
    question: "Who is known as the father of computers?",
    correctName: "Charles Babbage",
  },
  {
    question: "Who developed the theory of relativity?",
    correctName: "Albert Einstein",
  },
  {
    question: 'Who is the author of "Harry Potter"?',
    correctName: "J.K. Rowling",
  },
  { question: "Who invented the lightbulb?", correctName: "Thomas Edison" },
  {
    question: "Who was the first president of the United States?",
    correctName: "George Washington",
  },
  {
    question: "Who is the creator of Facebook?",
    correctName: "Mark Zuckerberg",
  },
  { question: "Who discovered penicillin?", correctName: "Alexander Fleming" },
  {
    question: "Who was the first man on the moon?",
    correctName: "Neil Armstrong",
  },
  {
    question: "Who invented the telephone?",
    correctName: "Alexander Graham Bell",
  },
  {
    question: 'Who is the author of "Pride and Prejudice"?',
    correctName: "Jane Austen",
  },
  {
    question: 'Who painted the "Starry Night"?',
    correctName: "Vincent van Gogh",
  },
  { question: "Who invented the airplane?", correctName: "Wright Brothers" },
  {
    question: 'Who is the author of "The Great Gatsby"?',
    correctName: "F. Scott Fitzgerald",
  },
  {
    question: 'Who wrote the play "Romeo and Juliet"?',
    correctName: "William Shakespeare",
  },
  {
    question: "Who was the first woman to fly solo across the Atlantic?",
    correctName: "Amelia Earhart",
  },
  { question: "Who discovered gravity?", correctName: "Isaac Newton" },
  {
    question: "Who invented the computer mouse?",
    correctName: "Douglas Engelbart",
  },
  { question: "Who is the co-founder of Apple?", correctName: "Steve Jobs" },
  {
    question: 'Who is the author of "To Kill a Mockingbird"?',
    correctName: "Harper Lee",
  },
  {
    question: 'Who painted "The Persistence of Memory"?',
    correctName: "Salvador Dalí",
  },
  {
    question: "Who is the first woman in space?",
    correctName: "Valentina Tereshkova",
  },
  {
    question: "Who developed the first vaccine?",
    correctName: "Edward Jenner",
  },
];

const App: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  const [answers, setAnswers] = useState<boolean[]>(
    new Array(questionsData.length).fill(false)
  );
  const [score, setScore] = useState(0);

  const handleAnswer = (id: number, isCorrect: boolean) => {
    const updatedAnswers = [...answers];
    updatedAnswers[id] = isCorrect;
    setAnswers(updatedAnswers);

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const snowflakeCount = 10;
  const snowflakes = Array.from({ length: snowflakeCount }, (_, index) => (
    <div key={index} className="snowflake">
      ❄️
    </div>
  ));

  return (
    <div className="app">
      <h1>Advent of ACT - Guess who???</h1>
      <audio ref={audioRef} src="/song.mp3" preload="auto" />
      <div className="boxes">
        <div className="snowflakes">{snowflakes}</div>
        {questionsData.map((data, index) => (
          <Box
            key={index}
            id={index}
            question={data.question}
            correctName={data.correctName}
            onAnswer={handleAnswer}
          />
        ))}
      </div>
      <p>
        Score: {score} / {questionsData.length}
      </p>
    </div>
  );
};

export default App;
