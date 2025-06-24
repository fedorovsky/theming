import { fn } from 'storybook/test';

import { LinariaCard } from '../src';
// import { Button } from '../dist/src';

export default {
  title: 'LinariaCard',
  component: LinariaCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    children: 'Primary Button',
  },
};
