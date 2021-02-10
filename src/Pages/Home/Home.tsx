import React, { FC, memo, useState } from 'react';

import { useCount } from '../../context/count';
import {
  ButtonsContainer,
  Button,
  Container,
  Text,
  TextContainer,
  Input,
} from './styles';

export const Home: FC = memo(() => {
  const { decrement, increment, count } = useCount();
  const [text, setText] = useState('');
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

      <TextContainer>
        <Text>{text}</Text>
      </TextContainer>

      <Input
        testID="input"
        value={text}
        maxLength={14}
        onChangeText={e =>
          setText(
            e
              .replace(/\D/g, '')
              .replace(/(\d{3})(\d)/, '$1.$2')
              .replace(/(\d{3})(\d)/, '$1.$2')
              .replace(/(\d{3})(\d)/, '$1-$2'),
          )
        }
      />
    </Container>
  );
});

Home.displayName = 'Home';
