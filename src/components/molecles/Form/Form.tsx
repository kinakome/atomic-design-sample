import React from 'react';
import styles from './Form.module.scss';
import { ButtonProps, Button } from 'components/atoms/Button/Button';
import {
  FormInputProps,
  FormInput,
} from 'components/atoms/FormInput/FormInput';

//atomsのtypeを継承
export type FormProps = ButtonProps & FormInputProps;

export const Form: React.FC<FormProps> = (props) => {
  return (
    <div className={styles.form}>
      <FormInput
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
      <Button
        text={props.text}
        disable={props.disable}
        onClick={props.onClick}
        size={props.size}
      />
    </div>
  );
};
