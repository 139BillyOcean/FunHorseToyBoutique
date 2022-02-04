import React from 'react';
import IndividualAnswersCSS from './IndividualAnswers.module.css';
import AnswerForm from './AnswerForm.jsx';

const IndividualAnswer = ({ answer, questionId, productId }) => {
  return (
    <div className={IndividualAnswersCSS.answer}>
      <div className={IndividualAnswersCSS.answerDate}>{answer.date}</div>
      <div className={IndividualAnswersCSS.answerer}>{answer.answerer}</div>
      <div className={IndividualAnswersCSS.answerBody}>{answer.body}</div>
    </div>
  );
};

export default IndividualAnswer;
