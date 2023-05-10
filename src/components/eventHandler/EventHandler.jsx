import styles from 'components/eventHandler/handStyle.module.scss'
import AsProps from 'components/eventHandler/AsProps'
import Propagation from 'components/eventHandler/Propagation'
 

function AlertButton ({message, children}) {
  return(
    <button className = {styles.handlerButton} onClick={()=>alert(message)}>
      {children}
    </button>
  )
}

function EventHandler() {

  function handleClick() {
    return (
      alert('welcome event handler')
    )
  }
  return (
    <>
      <div className={styles.handlerContainer}>
        event handler
        <div>
          <button onClick={handleClick} className={styles.handlerButton}>Click me!</button>
        </div>
        {/* inline */}
        <div>
          <button onClick={function handleClick() { alert('inline style') }} className={styles.handlerButton}>Click me!</button>
        </div>
        {/* arrow function */}
        <div>
          <button onClick={() => { alert('this is arrow function') }} className={styles.handlerButton}> click</button>
        </div>
        <div>
          <AlertButton message='show with message props'>show with children props</AlertButton>
        </div>
        <div>
          <AsProps />
        </div>
        <div>
          <Propagation />
        </div>
       
      </div>
       

    </>

  )
}

export default EventHandler