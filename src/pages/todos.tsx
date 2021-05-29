import React from 'react';
import { NextPage } from 'next';

import Head from 'next/head';
import Image from 'next/image';
import styles from 'styles/Home.module.scss';
import { TodoList } from 'components/organisms/TodoList/TodoList';
import Link from 'next/link';

const Todos: NextPage = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <a>home</a>
      </Link>{' '}
      <TodoList />
    </div>
  );
};

export default Todos;
