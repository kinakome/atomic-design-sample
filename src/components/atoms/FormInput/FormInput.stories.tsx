import React from 'react';
import { Story, Meta } from '@storybook/react';
import { FormInput, FormInputProps } from './FormInput';

export default {
  title: 'atoms/FormInput',
  component: FormInput,
} as Meta;

const Template: Story<FormInputProps> = (args) => <FormInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: '初期表示',
  value: '',
};
