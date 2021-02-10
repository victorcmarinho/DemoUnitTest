import React from 'react';
import { Home } from '../../../src/Pages/Home';
import { fireEvent, render } from '@testing-library/react-native';
import { act } from 'react-test-renderer';

import * as countHook from '../../../src/context/count';

describe('<Home/>', () => {
  const decrement = jest.fn();
  const increment = jest.fn();
  beforeEach(() => {
    jest.spyOn(countHook, 'useCount').mockReturnValue({
      count: 0,
      decrement,
      increment,
    });
  });

  it('Should be able render', () => {
    const component = render(<Home />);

    expect(component).toBeTruthy();
  });

  it('Should be able press add button', () => {
    const { getByTestId } = render(<Home />);
    const button = getByTestId('add-button');

    act(() => {
      fireEvent.press(button);
    });

    expect(increment).toBeCalled();
  });

  it('Should be able press remove button', () => {
    const { getByTestId } = render(<Home />);
    const button = getByTestId('remove-button');

    act(() => {
      fireEvent.press(button);
    });

    expect(decrement).toBeCalled();
  });

  it('Should be able insert input value', () => {
    const { getByTestId } = render(<Home />);
    const input = getByTestId('input');

    act(() => {
      fireEvent.changeText(input, '77788899911');
    });
    expect(input.props.value).toBe('777.888.999-11');
  });
});
