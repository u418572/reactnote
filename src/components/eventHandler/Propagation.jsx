import styles from 'components/eventHandler/handStyle.module.scss'

//stopping progagation(傳播)如何透過 stopPropagation ，終止事件冒泡傳遞

// function Button ({onClick, children}) {
//   return(
//     <>
//       <button onClick={e => {
//         e.stopRropagation();
//         onClick();
//       }}>
//       {children}
//       </button>
//     </>
   
//   )
// }

function Propagation() {
  return(
<div className={styles.toolBar} onClick={() => {
  alert('you click on the toolbar')
}}>s. s. s. </div>

  )
}

export default Propagation