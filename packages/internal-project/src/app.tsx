import React from 'react';
import { LinariaCard } from '@fedorovskyi/ui-kit';
import { ThemeSwitcher } from './components/theme-switcher';
// import { InternalCard } from './components/internal-card';

export const App = () => {
  return (
    <div>
      <ThemeSwitcher />
      <LinariaCard />
      {/*<InternalCard />*/}
    </div>
  );
};
