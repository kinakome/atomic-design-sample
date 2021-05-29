import React from 'react';
import styles from './Button.module.scss';

export type ButtonProps = {
  text: string;
  disable: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const Button: React.FC<ButtonProps> = (props) => {
  const disable = props.disable ? styles.disable : styles.enable;
  return (
    <button className={`${styles.button} ${disable} `} onClick={props.onClick}>
      {props.text}
    </button>
  );
};
