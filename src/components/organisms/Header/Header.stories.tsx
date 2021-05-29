import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Header } from './Header';

export default {
  title: 'organisms/Header',
  component: Header,
} as Meta;

const Template: Story = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'ボタン',
  placeholder: '初期表示',
  disable: true,
  value: '',
};
