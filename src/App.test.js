import React from 'react';
import ReactDOM from 'react-dom';
import App from './component-views/Valuation';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Valuation />, div);
});
