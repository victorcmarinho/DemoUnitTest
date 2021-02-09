import React from 'react';
import App from '../../src/App';
jest.useFakeTimers();

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});
