import React from 'react';
import styles from './IndividualAnswers.styles.css';
import AnswerForm from './AnswerForm.jsx';

const IndividualAnswer = ({ answer, questionId, productId }) => {
  return (
    <div className={styles.answer}>
      <div className={styles.answerDate}>{answer.date}</div>
      <div className={styles.answerer}>{answer.answerer}</div>
      <div className={styles.answerBody}>{answer.body}</div>
    </div>
  );
};

export default IndividualAnswer;
