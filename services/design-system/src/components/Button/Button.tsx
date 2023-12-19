import React from 'react';
import { CircularProgress } from '@mui/material';
import './style.module.scss';

export enum ButtonColor {
  'primary' = 'primary',
  'secondary' = 'secondary',
  'inherit' = 'inherit'
}

export enum ButtonSize {
  'small' = 'small',
  'medium' = 'medium',
  'large' = 'large',
}

export enum ButtonVariant {
  'default' = 'default',
  'contained' = 'contained',
}

export type ButtonProps = {
  loading?: boolean;
  children: React.ReactNode;
  color?: keyof typeof ButtonColor;
  variant?:  keyof typeof ButtonVariant;
  selected?: boolean;
  size?: keyof typeof ButtonSize;
  href?: string; // TODO add support
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  testId?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props: ButtonProps, ref) => {
  const { testId, href, loading, color, children, variant, selected, size, onClick } = props;

  const classNames: string[] = ['button'];

  if(color){
    classNames.push(`button-${color}`);
  }

  if(selected){
    classNames.push('button-selected')
  }

  if(loading){
    classNames.push('button-loading')
  }

  if(selected){
    classNames.push('button-selected')
  }

  if(variant){
    classNames.push(`button-${variant}`)
  }

  if(size){
    classNames.push(`button-${size}`)
  } else {
    classNames.push(`button-medium`)
  }

  let onClickHandler;
  if (onClick !== undefined) {
    onClickHandler = onClick;
  } else if(href){
    onClickHandler = () => { window.location.href = href};
  }

  return (
    <button
      className={classNames.join(' ')}
      onClick={ onClickHandler }
      ref={ref}
      data-testid={testId}
    >
      {loading && <CircularProgress className="spinner" size="1rem"/>}
      {children}
    </button>
  );
});

export default Button;