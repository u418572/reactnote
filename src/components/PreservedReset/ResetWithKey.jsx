import styles from 'components/PreservedReset/PreservedStyle.module.scss'
import { useState } from 'react'
//要將const 加入 styles. 的方法
function ResetWithKey() {
  const [hover, setHover] = useState(false)
  // const className =`${styles.counter}`
  // if(hover) {
  //   className += `${hover}`
  // }

  const classname = `${styles.counter} ${hover ? styles.hover : ''}`

  return (
    <>
      <div className={classname}
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
      >
        參數加入styles.name的方法
      </div>


    </>
  )

}

export default ResetWithKey