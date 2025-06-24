import * as React from 'react';
import { styled } from '@pigment-css/react';
import { tokens } from '@fedorovskyi/theme';

interface TitleProps {
  size?: 'small' | 'large';
}

const Title = styled('h1')<TitleProps>({
  fontSize: '24px;',
  fontWeight: 'bold',
  color: tokens.palette.text,
  variants: [
    {
      props: { size: 'large' },
      style: {
        fontSize: '32px',
        padding: '1rem',
      },
    },
    {
      props: { size: 'small' },
      style: {
        fontSize: '16px',
        padding: '0.5rem',
      },
    },
  ],
});

export const PigmentCard = () => {
  console.log('tokens:', tokens);

  return (
    <div className="card">
      <Title color="red" size="large">Card Title</Title>
      <Title color="red" size="small">Card Title</Title>
      <p>This is a simple card component.</p>
    </div>
  );
};
