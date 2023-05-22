import styles from 'components/mainBox/style.module.scss'
import EventHandler from 'components/eventHandler/EventHandler'
import UseRefrance from 'components/useRef/UseRefrance'
import MainState from 'components/StateMemory/MainState'
import MainInputState from 'components/inputstate/MainInputState'
import MainStructure from 'components/StructureState/MainStructure'
import MainSharing from 'components/sharingState/MainSharing'
import MainPreserved from 'components/PreservedReset/MainPreserved'
import MainContext from 'components/context/MainContext'
import MainTheme from 'components/theme/MainTheme'

function MainLayout(props) {
  return (
    <>
      <h1>{props.greeting}</h1>
      <div className={styles.mainContainer}>
        <EventHandler />
        <UseRefrance />
        <MainState />
        <MainInputState />
        <MainStructure />
        <MainSharing />
        <MainPreserved />
        <MainContext />
        <MainTheme />
        
      </div>
    </>
  )
}

export default MainLayout