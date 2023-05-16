import styles from 'components/inputstate/Inputstyle.module.scss'
import BaseLearn from 'components/inputstate/BaseLearn'
import ProfileEditor from 'components/inputstate/ProfileEditor'



function MainInputState (){
  return (
    <>
    
      <section className={styles.inputContainer}> 
        <h1>input and state</h1>
   <BaseLearn />
<ProfileEditor />
      </section>
    </>
  )
}

export default MainInputState