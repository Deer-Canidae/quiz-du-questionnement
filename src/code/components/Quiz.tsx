import * as React from "react";
import changeColor from "../functions/changeColor";
import Question from "./Question";
import type question from "../types/questionType";

interface QuizzProps {
  questions: question[];
  reset: {() : void};
}

/**
 * Component orchestrate the quiz logic
 * @param quizzProp contains a list of question and a reset handle
 * @returns JSX for the quiz
 */
export default function Quiz({ questions, reset }: QuizzProps) {
  const [nbQuestions] = React.useState(questions.length);
  React.useEffect(changeColor);

  const [count, setCount] = React.useState(1);
  if (count <= nbQuestions)
    return (
      <>
        <Question
          question={questions.pop()!}
          next={() => setCount(() => count + 1)}
        />
        <p>
          {count}/{nbQuestions}
        </p>
      </>
    );

  return (
    <>
      <h1>Félicitations! Tu es...</h1>
      <p>
        Evidement un test comme celui-ci ne peut pas determiner ton orientation
        ou ton identité. Toi seul·e en est capable. Nous t'offrons juste la
        possibilité de te poser des questions qui t'aideront peut-être à mieux
        te définir et être en accord avec toi même.
      </p>
      <button className="play" onClick={reset}>Reset</button>
    </>
  );
}
