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
      <div className={IndividualReviewCSS.reviewDate}>
        Date: {review.date.slice(0, 10)}
      </div>
      <div className={IndividualReviewCSS.reviewer}>
        Name: {review.reviewer}
      </div>
      {review.title === undefined ? (
        <div className={IndividualReviewCSS.reviewTitle}>
          Title: No Title Yet
        </div>
      ) : (
        <div className={IndividualReviewCSS.reviewTitle}>
          Title: {review.title}
        </div>
      )}
      <div className={IndividualReviewCSS.reviewBody}>
        Review: {review.body}
      </div>
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
