import styles from 'components/eventHandler/handStyle.module.scss'

function Button({ onClick, children }) {
  return (
    <button className={styles.handlerButton} onClick={onClick}>
      {children}
     </button>
  )

}

function PlayButton({movieName}) {    //注意大括號
  function handlePlayClick() {
    alert(`playing ${movieName}`)
  }
   return (
     <Button onClick={handlePlayClick}>play "{movieName}"</Button>
  )
 }


function AsProps() {
  return (
    <>
      <PlayButton movieName='造后者'/>
    <Button>WHAT???</Button>
    </>
  )
}

export default AsProps