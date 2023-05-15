import { useState } from 'react'
import styles from 'components/StateMemory/stateStyle.module.scss'

function LikeButton(props) {
   
  const [liked, setliked] = useState(props.liked)
  const [count, setCount] = useState(props.likeCount)
  const buttonText = () => {
    if (liked) {
      return 'Cancel Like'
    } else {
      return 'Like it'
    }
  }
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }} >
        <button onClick={() => {
          setliked(!liked)    //(!liked 把它想成false)
          setCount(liked? count -1 : count + 1)
          }}
            className={styles.likeButton} >likeButton  {buttonText()}</button>
        <span>{count}</span>
      </div>

    </>
  )
}

 
// 設定預設值，如果不用 prop的話，就會套用這個預設值。就像 MainState 裏的第一個Button
LikeButton.defaultProps = {
  liked: false,
  likeCount: 0,
}

export default LikeButton