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
  const [installable, setInstallable] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("beforeinstallprompt", function (ev) {
      ev.preventDefault();
      setInstallable(true);
    }, { once: true });
  }, []);

  const install = function (ev: React.MouseEvent) {
    ev.preventDefault();
    if (!installable)
      return;
    //@ts-expect-error
    installEvent.prompt();
  }

  if (quizzState === 0)
    return (
      <>
        <div className="container">
          <h1 onClick={install}>Quiz du questionnement</h1>
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