import React from 'react';
import styles from './FormInput.module.scss';

export type FormInputProps = {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FormInput: React.FC<FormInputProps> = (props) => {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      className={styles.formInput}
      onChange={props.onChange}
      value={props.value}
    />
  );
};
