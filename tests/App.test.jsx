/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from 'react';
import { render, fireEvent, cleanup, screen } from '@testing-library/react';
import App from '../client/src/component/App.jsx';

afterEach(cleanup);

test('render the text hello world in App', () => {
  render(<App />);
  screen.getByText('hello world!');
});
