import React, { FC, memo } from 'react';
import { useCount } from '../../context/count';
import {
  ButtonsContainer,
  Button,
  Container,
  Text,
  TextContainer,
} from './styles';

export const Home: FC = memo(() => {
  const { decrement, increment, count } = useCount();
  return (
    <Container>
      <TextContainer>
        <Text>{count}</Text>
      </TextContainer>

      <ButtonsContainer>
        <Button testID="add-button" onPress={() => increment()} title="Add">
          Add
        </Button>
        <Button
          testID="remove-button"
          onPress={() => decrement()}
          title="Remove"
        >
          Remove
        </Button>
      </ButtonsContainer>
    </Container>
  );
});
