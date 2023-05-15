import { useState } from 'react';
import styles from 'components/StateMemory/stateStyle.module.scss'

//這種情形不需要用useState
export default function Prompt() {
  // const [name, setName] = useState('');

  function handleClick() {
    // setName(prompt('What is your name?'));
    let name = prompt('What is your name ?')
    alert(`Hello, ${name}!`);
  }

  return (
    <button onClick={handleClick} className={styles.likeButton}>
      Greet
    </button>
  );
}
