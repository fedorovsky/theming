import * as React from 'react';
import { styled } from '@pigment-css/react';
import { tokens } from '@fedorovskyi/theme';

const Title = styled('div')({
  color: tokens.palette.text,
});

export const InternalCard = () => {
  console.log('tokens:', tokens);
  return (
    <div>
      <Title>Internal Card</Title>
    </div>
  );
};
