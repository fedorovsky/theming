import * as React from 'react';
import { styled } from '@linaria/react';

import { tokens } from '@fedorovskyi/theme';

const Title = styled.h1<{ color: string }>`
  font-size: 24px;
  //color: ${(props) => props.color};
  color: ${tokens.palette.primary};
`;

export const LinariaCard = () => {
  console.log('tokens:', tokens);

  return (
    <div className="card">
      <Title color="red">Card Title</Title>
      <p>This is a simple card component.</p>
    </div>
  );
};
