import styles from 'components/inputstate/Inputstyle.module.scss'
import { useState } from 'react'



function ProfileEditor() {
  const [isEditing, setIsEditing] = useState(false)
  const [firstName, setFirstName] = useState('強尼')
  const [lastName, setLastName] = useState('張')

  return (
    <>  
    {/* form 要加 onSubmit 來驗証。 加個false目前還不知道什麼意思 */}
      <form className={styles.ProfileContainer} onSubmit= {e => {e.preventDefault();setIsEditing(!isEditing)}}>
        <label>
          First name:{' '}
          {isEditing? (<input value={firstName} onChange={e=> setFirstName(e.target.value)}/>):(<b>{firstName}</b>)}
        
        </label>
        <label>
          Last name:{' '}
          {/* 雖然isEditing的 useState預設為(false) 可是這裏的isEditing  我覺得是 true 的意思
          或許還要好好的研究 */}
          {isEditing? (<input value={lastName} onChange={e => setLastName(e.target.value)} />) : (<b>{lastName}</b>)}
        </label>
        <button type="submit">
          {isEditing ? 'Save' : 'Edit'}Profile
        </button>
        <p><i>Hello, {firstName} {lastName}!</i></p>
      </form>
    </>
  )
}

export default ProfileEditor