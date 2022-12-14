/* eslint-disable @typescript-eslint/ban-types */
import React, { useReducer } from 'react';

interface ActionType {
  type: string;
}

// {} is valid as props
interface Props<U extends {}, V> {
  context: React.Context<{ state: U; dispatch: React.Dispatch<V> }>;
  reducer: React.Reducer<U, V>;
  initialState: U;
}

// {} is valid as props
const withProvider =
  <T extends {}, U, V extends ActionType>({ context: Context, reducer, initialState }: Props<U, V>) =>
  (WrappedComponent: React.ComponentType<T>) => {
    function ProviderWrapper(props: T) {
      const [state, dispatch] = useReducer(reducer, initialState);
      return (
        <Context.Provider value={{ state, dispatch }}>
          <WrappedComponent {...props} />
        </Context.Provider>
      );
    }

    return ProviderWrapper;
  };

export default withProvider;
