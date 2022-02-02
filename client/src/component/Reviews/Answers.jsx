import React from 'react';
import IndividualAnswer from '../Reviews/IndividualAnswers.jsx';
const Answers = ({ answers, questionId }) => {
  return (
    <div>
      {answers.map((answer) => (
        <IndividualAnswer answer={answer} />
      ))}
    </div>
  );
};

export default Answers;
