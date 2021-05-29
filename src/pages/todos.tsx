import React from 'react';
import { NextPage } from 'next';
import styles from 'styles/Home.module.scss';
import { TodoList } from 'components/organisms/TodoList/TodoList';

const Todos: NextPage = () => {
  return (
    <div className={styles.container}>
      <TodoList />
    </div>
  );
};

export default Todos;
