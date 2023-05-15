import styles from 'components/StateMemory/stateStyle.module.scss'
import LikeButton from 'components/StateMemory/LikeButton'
import FeedbackForm from 'components/StateMemory/FormOnSubmit'
import Prompt from 'components/StateMemory/Prompt'
import ArrNumber from 'components/StateMemory/ArrNumber'
function MainState() {
  return (
    <>
      <section className={styles.stateContainer}>state section
         <LikeButton />
        <LikeButton Liked={true} likeCount={8} />
        <FeedbackForm />
        <Prompt />
        <ArrNumber />
      </section>
    </>
  )
}

export default MainState