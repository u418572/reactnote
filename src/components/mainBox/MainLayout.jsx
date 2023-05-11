import styles from 'components/mainBox/style.module.scss'
import EventHandler from 'components/eventHandler/EventHandler'
import UseRefrance from 'components/useRef/UseRefrance'
import MainState from 'components/StateMemory/MainState'

function MainLayout(props) {
  return (
    <>
      <h1>{props.greeting}</h1>
      <div className={styles.mainContainer}>
        <EventHandler />
        <UseRefrance />
        <MainState />
      </div>
    </>
  )
}

export default MainLayout