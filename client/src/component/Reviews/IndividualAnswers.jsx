import React from 'react';

const IndividualAnswer = ({ answer }) => {
  return (
    <div>
      <div>{answer.date}</div>
      <div>{answer.answerer}</div>
      <div>{answer.body}</div>
    </div>
  );
};

export default IndividualAnswer;
