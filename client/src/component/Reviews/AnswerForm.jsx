import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './AnswerForm.styles.css';
const axios = require('axios');

const AnswerForm = ({ questionId }) => {
  const [AnswerForm, setAnswerForm] = useState(false);
  const [AnswerTitle, setAnswerTitle] = useState('');
  const [AnswerBody, setAnswerBody] = useState('');

  const handleAnswerTitle = (e) => setAnswerTitle(e.target.value);
  const handleAnswerBody = (e) => setAnswerBody(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    var Answer = {
      Answerer: '',
      body: AnswerBody,
      title: AnswerTitle,
    };
    axios.post('/Answer', { Answer }, { params: { questionId: questionId } });
  };

  return (
    <div>
      <button onClick={() => setAnswerForm(!AnswerForm)}>add Answer</button>
      {AnswerForm === true && (
        <div className={styles.AnswerForm}>
          <form onSubmit={handleSubmit}>
            <div>
              <label className={styles.AnswerFormTitle}>Title</label>
              <input
                input='text'
                value={AnswerTitle}
                onChange={handleAnswerTitle}
              ></input>
            </div>
            <div>
              <label className={styles.AnswerFormBody}>Answer</label>
              <input
                input='text'
                value={AnswerBody}
                onChange={handleAnswerBody}
              ></input>
            </div>
            <input type='submit' value='Submit' />
          </form>
        </div>
      )}
    </div>
  );
};

export default AnswerForm;
