import styles from 'components/sharingState/SharingStyle.module.scss'
import Accordion from 'components/sharingState/Accordion'
 
function MainSharing() {
   return (
    <>
      <section className={styles.structureContainer}>
        <h1>sharing state </h1>
        <Accordion />
      </section>
    </>
  )
}
 export default MainSharing