import React from 'react';
import { ThemeSwitcher } from './components/theme-switcher';
import { LinariaCard } from '@fedorovskyi/ui-kit';

export const App = () => {
  return (
    <div>
      <ThemeSwitcher />
      <LinariaCard />
    </div>
  );
};
