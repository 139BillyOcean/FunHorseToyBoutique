import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import IndividualReviewCSS from './IndividualReview.module.css';
import data from '../Reviews/FakeReviewData.js';
import Answers from '../Reviews/Answers.jsx';
import AnswerForm from '../Reviews/AnswerForm.jsx';

const IndividualReview = ({ review, productId }) => {
  const [answers, showAnswers] = useState(true);
  const [buttonString, setButtonString] = useState(null);

  useEffect(() => {
    if (answers === false) {
      setButtonString('Show');
    } else {
      setButtonString('Hide');
    }
  }, [answers]);

  return (
    <div className={IndividualReviewCSS.review}>
      <div className={IndividualReviewCSS.reviewer}>
        Name: {review.reviewer}
      </div>
      {review.title === undefined ? (
        <span className={IndividualReviewCSS.reviewTitle}>
          Title: No Title Yet
        </span>
      ) : (
        <span className={IndividualReviewCSS.reviewTitle}>
          Title: {review.title}
        </span>
      )}
      <span className={IndividualReviewCSS.reviewDate}>
        Date: {review.date}
      </span>
      <div className={IndividualReviewCSS.reviewBody}>{review.body}</div>
      {/* <div className={IndividualReviewCSS.reviewHelpful}>
        Helpfulness: {review.helpful}
      </div> */}
      {/* <div className={IndividualReviewCSS.answer_title}>Answers:</div>
      {answers === true && (
        <Answers
          answers={review.answers}
          questionId={review._id}
          productId={productId}
        />
      )} */}
      {/* <AnswerForm
        answers={review.answers}
        questionId={review._id}
        productId={productId}
      /> */}
      {/* <button id = 'show-hide-btn' className={ IndividualReviewCSS.showhide_btn} onClick={() => showAnswers(!answers)}>{buttonString}</button> */}
    </div>
  );
};

export default IndividualReview;
