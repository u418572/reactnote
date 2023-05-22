import styles from 'components/StructureState/Structure.module.scss'
import GroupState from 'components/StructureState/GroupState'
 
function MainStructure () {
  return (
    <>
      <section className={styles.structureContainer}>
        <h1>struction state </h1>
         <GroupState />
       </section>
    </>
  )
}

export default MainStructure