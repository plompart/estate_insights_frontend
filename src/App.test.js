import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Valuation';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Valuation />, div);
});
