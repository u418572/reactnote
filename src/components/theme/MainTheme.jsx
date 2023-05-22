import styles from 'components/theme/themeStyle.module.scss'
import Theme from 'components/theme/Theme'


function MainTheme() {

  return (
    <>
      <section className={styles.mainThemeContainer}>
        <h1>顯示模示切換</h1> 
        <Theme />
      </section>
    </>
  )
}

export default MainTheme