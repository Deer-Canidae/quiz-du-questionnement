import * as React from "react";
import changeColor from "../functions/changeColor";
import type question from "../types/questionType";
import questionsRaw from "../../questions.json";
import Quiz from "./Quiz";
import arrayShuffle from "../functions/arrayShuffle";

// Typing import
const questions: question[] = questionsRaw;
let installEvent: Event;

/**
 * Component to manage global app state
 * @returns JSX for the app
 */
export default function App() {
  const [quizzState, setQuizzState] = React.useState(0); // 0 = main menu, 1 Game running

  if (quizzState === 0)
    return (
      <>
        <div className="container">
          <h1>Quiz du questionnement</h1>
          <button
            onClick={() => {
              setQuizzState(1);
            }}
          >
            Participer !
          </button>
        </div>
      </>
    );

  return (
    <div className="container">
      <Quiz
        questions={arrayShuffle(questions)}
        reset={() => {
          setQuizzState(0);
          changeColor();
        }}
      />
    </div>
  );
}