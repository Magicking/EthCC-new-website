import React, { ReactChild, useCallback, useContext, useState } from 'react';

import { UnlockState } from '@types';

import { useEventListener } from './useEventListener';

const UnlockContext = React.createContext<{
  state: UnlockState;
}>({
  state: `pending`,
});

export const UnlockProvider = ({ children }: { children: ReactChild }) => {
  const [state, setState] = useState<UnlockState>(`pending`);

  const unlockHandler = useCallback((e) => setState(e.detail), [setState]);

  useEventListener(`unlockProtocol`, unlockHandler);

  return (
    <UnlockContext.Provider value={{ state }}>
      {children}
    </UnlockContext.Provider>
  );
};

export const useUnlock = () => {
  const context = useContext(UnlockContext);

  if (context === undefined) {
    throw new Error(`useUnlock must be used within a UnlockProvider`);
  }

  return context;
};
