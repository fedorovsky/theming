import * as React from 'react';
import { styled } from '@pigment-css/react';
import { tokens } from '@fedorovskyi/theme';


const Card = styled('div')({
  border: `1px solid ${tokens.colors.primary100}`,
  borderRadius: '8px',
  padding: '10px',
  maxWidth: '300px',
  backgroundColor: tokens.colors.neutral100,
  color: tokens.colors.textNeutral100,
});

const Title = styled('h2')<{
  size?: 'small' | 'large';
}>({
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
    <Card>
      <Title color="red" size="large">Card Title</Title>
      <Title color="red" size="small">Card Subtitle</Title>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, nesciunt!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, nesciunt!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, nesciunt!</p>
    </Card>
  );
};
