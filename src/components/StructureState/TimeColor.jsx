import styles from 'components/StructureState/Structure.module.scss'
import { useState } from 'react';

 const colors = ['lightcoral','midnghtblue','rebeccapurple']

 export function ColorSet(props) {
    const[color, setColor] = useState(props.color)
  return (
     <h1 style={{ color: color }}>
   {/* {props.time} */}
  </h1>
  )
}

function colorOnclick (e, colors,coloritem) {
   coloritem =colors.find(item => {
   return item === e.target.value
  })
   
}


function TimeColor() {
  let coloritem = ''
  return (
    <>

      <h1>Pick a color</h1>
      <select name="" id="" className={styles.timeSelect}  onChange={e=>  colorOnclick(e,colors,coloritem)}>
        <option value="lightcoral">lightcoral</option>
        <option value="midnghtblue">midnghtblue</option>
        <option value="rebeccapurple">rebeccapurple</option>
      </select>
      <ColorSet color={coloritem}/>
  
      {/* midnghtblue={styles.midnghtblue} */}
       {/* rebeccapurple={styles.rebeccapurple} */}
  
     


    </>
  )
}

export default TimeColor