import React from 'react';
import MUIButton, { ButtonProps as MUIButtonProps } from '@mui/material/Button';

export type ButtonProps = {} & MUIButtonProps;

export default function Button(props: ButtonProps) {
  const { children, ...muiProps } = props;
  return (
    <MUIButton variant="outlined" {...muiProps}>
      {children}
    </MUIButton>
  );
}
