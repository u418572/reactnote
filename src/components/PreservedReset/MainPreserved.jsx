import styles from 'components/PreservedReset/PreservedStyle.module.scss'
import OnPointEnter from 'components/PreservedReset/OnPointEnter'
import ResetWithKey from 'components/PreservedReset/ResetWithKey'

function MainPreserved () {
  return (
    <>
      <section className={styles.preservedContainer}>
        <h1>preserved and resetting </h1>
        <div clsaaName={styles.counter}>奇怪了…</div>
        <OnPointEnter />
        <ResetWithKey />
      </section>
    </>
  )
 
}

export default MainPreserved