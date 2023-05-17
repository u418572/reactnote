import styles from 'components/StructureState/Structure.module.scss'
import GroupState from 'components/StructureState/GroupState'
import TimeColor from 'components/StructureState/TimeColor'

function MainStructure () {
  return (
    <>
      <section className={styles.structureContainer}>
        <h1>struction state </h1>
         <GroupState />
         <TimeColor />
      </section>
    </>
  )
}

export default MainStructure