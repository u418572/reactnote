import styles from 'components/PreservedReset/PreservedStyle.module.scss'
import { useState } from 'react'
import '../../App.css'
//注意26, 27, 28行的寫法 onPointerEnter={() => setHover(true)} 滑鼠移入
// onPointerLeave = {() => setHover(false)}  滑鼠離開
function OnPointEnter() {
  const [showB, setShowB] = useState(true);
  return (
    <>
      <div>
        <div className={styles.countContainer}>
          <Counter />
          {showB && <Counter />}
        </div>

        <label>
          <input
            type="checkbox"
            checked={showB}
            onChange={e => {
              setShowB(e.target.checked)
            }}
          />
          Render the second counter
        </label>
      </div>
    </>
  )
}
// *************************************
function Counter() {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let classname = 'counter';
  if (hover) {
    classname += ' hover';
  }
  return (
    <div
      className={classname}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button className={styles.pointButton} onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
  );

}

export default OnPointEnter