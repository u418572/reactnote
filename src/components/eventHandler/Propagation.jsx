import styles from 'components/eventHandler/handStyle.module.scss'
// 這是沒有阻止冒冒事件的寫法
   function Toolbar() {
  return (
    <div className={styles.toolBar} onClick={() => {
      alert('You clicked on the toolbar!');
    }}>
      <button className={styles.handlerButton} onClick={() => alert('propagation1')}>
        propagation1
      </button>
      <button className={styles.handlerButton} onClick={() => alert('propagation2')}>
        propagation2
      </button>
    </div>
  );
}

//stopping progagation(傳播)如何透過 stopPropagation ，終止事件冒泡傳遞

function Button ({onClick, children}) {
  return(
        <button className={styles.handlerButton} onClick={e => {
        // 這裏加e.stopPropagation()，可以終止事件往上
       e.stopPropagation()
        onClick();
      }}>
      {children}
      </button>
   )
}

function Propagation() {
  return(
    <>
      <Toolbar />
    
      <div className={styles.toolBar} onClick={() => {
        alert('you click on the toolbar')
      }}>
        <Button onClick={() => alert('propagation')}>stopPropagation1 </Button>
        <Button onClick={() => alert('uploading')}>stopPropagation2 </Button>
       </div>
    </>


  )
}

export default Propagation