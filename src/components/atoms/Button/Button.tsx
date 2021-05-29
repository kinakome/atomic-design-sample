import React from 'react';
import styles from './Button.module.scss';

export type ButtonProps = {
  text: string;
  disable?: boolean;
  size: 'small' | 'medium';
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const Button: React.FC<ButtonProps> = (props) => {
  const disable = props.disable ? styles.disable : styles.enable;
  const size = props.size === 'small' ? styles.small : styles.medium;

  return (
    <button className={`${disable} ${size}`} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

Button.defaultProps = { disable: false };
