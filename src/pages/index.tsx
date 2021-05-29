import React from 'react';
import { NextPage } from 'next';

import Head from 'next/head';
import Image from 'next/image';
import styles from 'styles/Home.module.scss';
import { TodoList } from 'components/organisms/TodoList/TodoList';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Link href="/todos">
        <a>todos</a>
      </Link>{' '}
    </div>
  );
};

export default Home;
