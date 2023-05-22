 import styles from 'components/theme/themeStyle.module.scss'
import { Themes } from 'components/theme/Themes'
import {useContext } from 'react'
import {ThemeContext} from 'components/theme/Context'

function ThemeButton() {
  const {theme,setTheme} =useContext(ThemeContext)
 return (
  <button 
   onClick={()=> theme===Themes.light? setTheme(Themes.dark): setTheme(Themes.light)}
  style ={{backgroundColor:theme.background, color:theme.color}}>按一下 
  </button>
 )
 }

export default ThemeButton