import * as React from "react";
import type question from "../types/questionType";

interface QuestionProps {
  question: question;
  next: {(): void}
}

/**
 * Component in charge of displaying the Quiz's current question
 * @param questionProps contains the question data and a handle to get to the next question
 * @returns 
 */
export default function Question({ question, next}: QuestionProps) {
  
  return <>
    <h1>{question.question}</h1>
    <div className="reponses">
      {question.reponses.map((val, ind) => <button key={ind} onClick={next}>{val}</button>)}
    </div>
  </>
}