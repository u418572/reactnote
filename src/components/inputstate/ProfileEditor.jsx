import styles from 'components/inputstate/Inputstyle.module.scss'
import { useState } from 'react'



function ProfileEditor() {
  return (
    <>
       <form className={styles.ProfileContainer}>
        <label>
          First name:{' '}
          <b>Jane</b>
          <input />
        </label>
        <label>
          Last name:{' '}
          <b>Jacobs</b>
          <input />
        </label>
        <button type="submit">
          Edit Profile
        </button>
        <p><i>Hello, Jane Jacobs!</i></p>
      </form>
     </>
  )
}

export default ProfileEditor