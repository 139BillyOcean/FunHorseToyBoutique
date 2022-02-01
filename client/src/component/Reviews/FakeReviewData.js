/*
  reviews: [{
    title: String,
    body: String,
    date: {
      type: Date,
      default: Date.now
    },
    reviewer: String,
    answers: [{
      body: String,
      date: {
        type: Date,
        default: Date.now
      },
      answerer: String
    }],
    helpful: {
      type: Number,
      default: 0,
    }
  }]
*/

const data = {
  reviews: [
    {
      title: 'hello world',
      body: `How had she been so wrong? All her instincts and intuition completely
      failed her for the first time in her life. She had so heavily relied on both when making decisions
      up until this moment and she felt a seismic shift take place in her self-confidence. If she could be so
      completely wrong about something so simple as this, how could she make decisions about really important things
      taking place in her life? She wasn't sure what she should do next.`,
      date: '1/31/2022',
      reviewer: 'Michael',
      answers: [
        {
          body: 'this is an answer body',
          date: '1/31/2022',
          answerer: 'MichaelVWu',
        },
      ],
      helpful: '1',
    },
    {
      title: 'hello world 2.0',
      body: `The boxed moved. That was a problem. Peter had packed the box three hours before and
      there was nothing inside that should make it move. The question now was whether or not Peter
      was going to open it up and look inside to see why it had moved. The answer to that question
      was obvious. Peter dropped the package into the mailbox so he would never have to see it again.`,
      date: '1/31/2022',
      reviewer: 'Michael 2.0',
      answers: [
        {
          body: 'this is an answer body 2.0',
          date: '1/31/2022',
          answerer: 'MichaelVWu 2.0',
        },
      ],
      helpful: '2',
    },
    {
      title: 'hello world 3.0',
      body: 'this is the body for hello world 3.0',
      date: '1/31/2022',
      reviewer: 'Michael 3.0',
      answers: [
        {
          body: 'this is an answer body 3.0',
          date: '1/31/2022',
          answerer: 'MichaelVWu 3.0',
        },
      ],
      helpful: '3',
    },
    {
      title: 'hello world 4.0',
      body: 'this is the body for hello world 4.0',
      date: '1/31/2022',
      reviewer: 'Michael 4.0',
      answers: [
        {
          body: 'this is an answer body 4.0',
          date: '1/31/2022',
          answerer: 'MichaelVWu 4.0',
        },
      ],
      helpful: '4',
    },
    {
      title: 'hello world 5.0',
      body: 'this is the body for hello world 5.0',
      date: '1/31/2022',
      reviewer: 'Michael 5.0',
      answers: [
        {
          body: 'this is an answer body 5.0',
          date: '1/31/2022',
          answerer: 'MichaelVWu 5.0',
        },
      ],
      helpful: '5',
    },
    {
      title: 'hello world 6.0',
      body: 'this is the body for hello world 6.0',
      date: '1/31/2022',
      reviewer: 'Michael 6.0',
      answers: [
        {
          body: 'this is an answer body 6.0',
          date: '1/31/2022',
          answerer: 'MichaelVWu 6.0',
        },
      ],
      helpful: '6',
    },
    {
      title: 'hello world 7.0',
      body: 'this is the body for hello world 7.0',
      date: '1/31/2022',
      reviewer: 'Michael 7.0',
      answers: [
        {
          body: 'this is an answer body 7.0',
          date: '1/31/2022',
          answerer: 'MichaelVWu 7.0',
        },
      ],
      helpful: '7',
    },
    {
      title: 'hello world 8.0',
      body: 'this is the body for hello world 8.0',
      date: '1/31/2022',
      reviewer: 'Michael 8.0',
      answers: [
        {
          body: 'this is an answer body 8.0',
          date: '1/31/2022',
          answerer: 'MichaelVWu 8.0',
        },
      ],
      helpful: '8',
    },
    {
      title: 'hello world 9.0',
      body: 'this is the body for hello world 9.0',
      date: '1/31/2022',
      reviewer: 'Michael 9.0',
      answers: [
        {
          body: 'this is an answer body 9.0',
          date: '1/31/2022',
          answerer: 'MichaelVWu 9.0',
        },
      ],
      helpful: '9',
    },
    {
      title: 'hello world 10.0',
      body: 'this is the body for hello world 10.0',
      date: '1/31/2022',
      reviewer: 'Michael 10.0',
      answers: [
        {
          body: 'this is an answer body 10.0',
          date: '1/31/2022',
          answerer: 'MichaelVWu 10.0',
        },
      ],
      helpful: '10',
    },
  ],
};

module.exports = data;
