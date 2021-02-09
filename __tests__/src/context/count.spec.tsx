import {
  fireEvent,
  render,
  RenderAPI,
  RenderOptions,
} from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';
import { act } from 'react-test-renderer';
import { CountProvider, useCount } from '../../../src/context/count';
import { Button } from '../../../src/Pages/Home/styles';

const TestComponent: React.FC = () => {
  const { count, increment, decrement } = useCount();

  return (
    <>
      <Text>{count}</Text>

      <Button title="Increment" testID="increment" onPress={increment}>
        Increment
      </Button>

      <Button title="Decrement" testID="decrement" onPress={decrement}>
        Decrement
      </Button>
    </>
  );
};

describe('Count Context', () => {
  const renderComponent = (renderOptions?: RenderOptions): RenderAPI => {
    return render(
      <CountProvider>
        <TestComponent />
      </CountProvider>,
      renderOptions,
    );
  };

  it('Should be able render Context', () => {
    const container = renderComponent();
    expect(container).toBeTruthy();
  });

  it('Should be able execute incremente', () => {
    const { getByTestId, findByDisplayValue } = renderComponent();
    const incrementButton = getByTestId('increment');
    expect(findByDisplayValue('0')).toBeTruthy();
    act(() => {
      fireEvent.press(incrementButton);
    });
    expect(findByDisplayValue('1')).toBeTruthy();
    act(() => {
      fireEvent.press(incrementButton);
    });
    expect(findByDisplayValue('2')).toBeTruthy();
  });

  it('Should be able execute decrement', () => {
    const { getByTestId, findByDisplayValue } = renderComponent();
    const incrementButton = getByTestId('decrement');
    expect(findByDisplayValue('0')).toBeTruthy();
    act(() => {
      fireEvent.press(incrementButton);
      fireEvent.changeText;
    });
    expect(findByDisplayValue('-1')).toBeTruthy();
    act(() => {
      fireEvent.press(incrementButton);
    });
    expect(findByDisplayValue('-2')).toBeTruthy();
  });
});
