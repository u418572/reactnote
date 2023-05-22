import styles from 'components/sharingState/SharingStyle.module.scss'
import { useState } from 'react';
// 原本的，每個panel 是獨立的，只能各自顯示。想要做成切換的方式。就要把state給父層
// 之後，再透過父層傳prop 來達成

// 1現在這state 在父層這裏。  useState 改成用index 的方式
//   從false 改成0-- > useState(0)
// 2再 設一個 event handler onShow  來改變 activeIndex
export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className={styles.accordion}>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        //第一個的activeIndex是預設的0 //所以會先顯示內容
        isActive={activeIndex === 0} 
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        //點了之後，activeIndex  變成了 1 ,上面的那個panle 就會跟著改變
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
    </div>
  );
}

function Panel({
  title,
  children,
  isActive,
  onShow
}) {
  return (
    <section className={styles.panel}>
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button className={styles.accButton} onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}
