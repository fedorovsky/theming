import * as React from 'react';
import { styled } from '@linaria/react';
import { tokens } from '@fedorovskyi/theme';

const Title = styled.h1`
  color: ${tokens.palette.text};
`;

export const InternalCard = () => {
  return (
    <div>
      <Title>Internal Card</Title>
    </div>
  );
};
