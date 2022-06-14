import React from 'react';
import {Staff} from './types/Staff';

interface StaffContext {
  login: (email: string, password: string) => void;
  loginByToken: (token: string, staff: Staff) => void;
  logout: () => void;
  tokenAuthLoading: boolean;
  tokenVerifyLoading: boolean;
  staff?: Staff;
}

export const StaffContext = React.createContext<StaffContext>({
  login: undefined,
  loginByToken: undefined,
  logout: undefined,
  tokenAuthLoading: false,
  tokenVerifyLoading: false,
});

export * from './utils';
