import React, { useState } from 'react';
import { Form } from 'components/molecles/Form/Form';
import { Button } from 'components/atoms/Button/Button';
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

  const addTask = (e) => {
    e.preventDefault();
    if (task !== '') {
      setTodos([...todos, task]);
      setTask('');
      setDisable(true);
    }
  };

  const removeTask = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className={styles.wrapper}>
      <Form
        text="追加"
        disable={disable}
        onClick={addTask}
        onChange={onChange}
        placeholder="タスクを入力してください"
        value={task}
        size="medium"
      />
      <ul className={styles.todos}>
        {todos.map((todo, index) => (
          <li key={index} className={styles.todo}>
            <div className={styles.text}>{todo}</div>
            <div className={styles.button}>
              <Button
                size="small"
                disable={false}
                text="削除"
                onClick={() => removeTask(index)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
