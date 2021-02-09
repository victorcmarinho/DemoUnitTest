import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useState,
} from 'react';

interface ICountContextData {
  increment: () => void;
  decrement: () => void;
  count: number;
}

const CountContext = createContext<ICountContextData>({} as ICountContextData);

const CountProvider: FC = ({children}) => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((e) => e + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((e) => e - 1);
  }, []);

  return (
    <CountContext.Provider value={{increment, decrement, count}}>
      {children}
    </CountContext.Provider>
  );
};

const useCount = (): ICountContextData => {
  return useContext(CountContext);
};

export {useCount, CountProvider};
