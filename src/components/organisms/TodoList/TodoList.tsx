import React, { useState } from 'react';
import { Form } from 'components/molecles/Form/Form';
import styles from './TodoList.module.scss';

export const TodoList: React.FC = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  //入力されたらボタンをenableにする
  const [disable, setDisable] = useState(true);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const input = e.target.value;
    if (input.length === 0) {
      setDisable(true);
    } else {
      setDisable(false);
    }
    setTask(input);
  };

  const onClick = (e) => {
    e.preventDefault();
    if (task !== '') {
      setTodos([...todos, task]);
      setTask('');
    }
    console.log(todos);
  };

  return (
    <div className={styles.wrapper}>
      <Form
        text="追加"
        disable={disable}
        onClick={onClick}
        onChange={onChange}
        placeholder="タスクを入力してください"
        value={task}
      />
      <ul className={styles.todos}>
        {todos.map((todo, index) => (
          <li key={index} className={styles.todo}>
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};
