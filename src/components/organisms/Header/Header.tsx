import React from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import { Button } from 'components/atoms/Button/Button';

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.contents}>
        <div className={styles.title}>Todoアプリ</div>
        <div className={styles.buttons}>
          <Link href="/">
            <a>
              <Button size="small" text="Home" />
            </a>
          </Link>
          <Link href="/todos">
            <a>
              <Button size="small" text="Todo" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
