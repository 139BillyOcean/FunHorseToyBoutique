import React from 'react';
import IndividualAnswer from '../Reviews/IndividualAnswers.jsx';
const Answers = ({ answers, questionId, productId }) => {
  return (
    <div>
      {answers.map((answer) => (
        <IndividualAnswer
          answer={answer}
          questionId={questionId}
          productId={productId}
        />
      ))}
    </div>
  );
};

export default Answers;
