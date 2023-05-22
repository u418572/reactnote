import styles from 'components/context/ContextStyle.module.scss'
import TestApp from 'components/context/TestApp'

function MainContext() {
  return (
    <>
      <section className={styles.contextContainer}>
        <h1>useContext </h1>
        <TestApp />
       </section>
    </>
  )
}

export default MainContext