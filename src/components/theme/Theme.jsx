import styles from 'components/theme/themeStyle.module.scss'
import { Themes } from 'components/theme/Themes'
 import {useState, useContext} from 'react'
import ToolBar from 'components/theme/Toolbar'
import { ThemeContext } from 'components/theme/Context'
   
function Theme () {

 const [theme, setTheme] = useState(Themes.light)
 
 
  return (
    <>
    <ThemeContext.Provider value={{theme,setTheme}}>
        <section className={styles.themel}>顯示模示切換

          <ToolBar />



        </section>
    </ThemeContext.Provider>
   
    </>
  )
}

export default Theme