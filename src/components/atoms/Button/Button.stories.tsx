import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'atoms/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Midium = Template.bind({});
Midium.args = {
  text: 'ボタン',
  size: 'medium',
};

export const Small = Template.bind({});
Small.args = {
  text: 'ボタン',
  size: 'small',
};
