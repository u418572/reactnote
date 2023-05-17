import styles from 'components/StructureState/Structure.module.scss'
import { useState } from 'react';


  function GroupState() {

    const [position, setPosition] = useState({
      x: 0,
      y: 0
    });

    return (
      <>
        <div
          className={styles.pointer}
          onPointerMove={e => {
            setPosition({
              x: e.clientX,
              y: e.clientY
            });
          }}
         >
          <div style={{
            position: 'absolute',
            backgroundColor: 'red',
            borderRadius: '50%',
            transform: `translate(${position.x}px, ${position.y}px)`,
            left: 0,
            top: 0,
            width: 20,
            height: 20,
          }} />
        </div>
      </>
    )
  }

export default GroupState