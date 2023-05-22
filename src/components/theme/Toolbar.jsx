import styles from 'components/theme/themeStyle.module.scss'
// import { Themes } from 'components/theme/Themes'
import { useState, useContext } from 'react'
import { ThemeContext } from 'components/theme/Context'
import ThemeButton from 'components/theme/ThemeButton'

function ToolBar(props) {
 
  return (
    <div className={styles.toolBar}>
      <ThemeButton />
    </div>
   )
}

export default ToolBar