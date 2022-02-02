import React from 'react';
import IndividualAnswer from '../Reviews/IndividualAnswers.jsx';
const Answers = ({ answers, questionId }) => {
  return (
    <div>
      {answers.map((answer) => (
        <IndividualAnswer answer={answer} questionId={questionId} />
      ))}
    </div>
  );
};

export default Answers;
