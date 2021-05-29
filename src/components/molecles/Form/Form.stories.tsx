import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Form, FormProps } from './Form';

export default {
  title: 'molecules/Form',
  component: Form,
} as Meta;

const Template: Story<FormProps> = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'ボタン',
  placeholder: '初期表示',
  disable: true,
  value: '',
};
