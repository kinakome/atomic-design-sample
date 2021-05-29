import React from 'react';
import { Story, Meta } from '@storybook/react';
import { TodoList } from './TodoList';

export default {
  title: 'organisms/TodoList',
  component: TodoList,
} as Meta;

const Template: Story = (args) => <TodoList {...args} />;

export const Default = Template.bind({});
Default.args = {};
