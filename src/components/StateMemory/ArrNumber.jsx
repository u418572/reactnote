import { useState } from 'react';
import styles from 'components/StateMemory/stateStyle.module.scss'

// 改變陣列第三個元素  用map 的方法
const numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

export default function ArrNumber () {
  const [number, setNumber] = useState(numberArr)

  function handleClick() {
    const newNumber = number.map((item, index) => (index === 2) ? '100' : item)
    setNumber(newNumber)
    alert(`index 3  ${newNumber[2]}`)
   }
  
  return (
    <>
      <button onClick={handleClick} className={styles.likeButton}>
        {number[2]}
      </button>
      <h1>{number[2]}</h1>
    </>
   );
   }
