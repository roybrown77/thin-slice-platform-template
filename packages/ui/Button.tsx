import type { ReactNode } from 'react';

export const Button = ({ children }: { children: ReactNode }) => (
  <button className="px-4 py-2 bg-blue-500 text-white rounded">
    {children}
  </button>
);