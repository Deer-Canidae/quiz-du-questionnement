import * as React from "react";
import type quizz from "./quizzType";

interface QuestionProps {
  question: quizz;
  next: {(): void}
}

export default function Question({ question, next}: QuestionProps) {
  
  return <>
    <h1>{question.question}</h1>
    <div className="reponses">
      {question.reponses.map((val, ind) => <button key={ind} onClick={next}>{val}</button>)}
    </div>
  </>
}