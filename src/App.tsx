import * as React from "react";
import changeColor from "./changeColor";
import type quizz from "./quizzType";
import rawQuestions from "./questions.json";
import Quizz from "./Quizz";
import arrayShuffle from "./arrayShuffle";

const questions: quizz[] = rawQuestions;
let installEvent: Event;

export default function App() {
  const [quizzState, setQuizzState] = React.useState(0); // 0 = main menu, 1 Game running

  if (quizzState === 0)
    return (
      <>
        <div className="container">
          <h1>Quiz du questionnement</h1>
          <button
            className="play"
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
      <Quizz
        questions={arrayShuffle(questions)}
        reset={() => {
          setQuizzState(0);
          changeColor();
        }}
      />
    </div>
  );
}