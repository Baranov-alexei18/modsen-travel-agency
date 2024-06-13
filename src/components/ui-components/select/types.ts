import { ReactNode } from 'react';

export type SelectType = {
  cyId: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur: (e: unknown) => void;
  name: string;
  defaultValue: string;
  value: string;
  children: ReactNode;
};
