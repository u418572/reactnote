// 白話文，一開始 isSent是 false所以先return else 裏面的 form . 
// 等你輸入東西後， 可是當你按submit  之後就會觸發onChange 的函式
// component會重新渲染
// 然後就先照函式走流程
// 1 e.preventDefault() 取消它會先submit的預設行為
// 2 跳出alert(`sending: ${message}`)的畫面
// 3 state 的值改變了 setIsent(true), 變true
// 4 再往下走到onChange函式。如果state 的值沒變的話就停了，可是
//   又發現isSent 變成ture  了 ，component 又再跑一次流程。
// 5 就return true 出現了 Thank you! 的畫面

import styles from 'components/StateMemory/stateStyle.module.scss'
import { useState } from 'react';

export default function FeedbackForm() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('');

  if (isSent) {
    return <h1>Thank you!</h1>;
  } else {
    return (
      <form onSubmit={e => {
        e.preventDefault();
        alert(`Sending: "${message}"`);
        setIsSent(true);
      }}>
        <textarea
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <br />
        <button type="submit" className={styles.likeButton}>Send</button>
      </form>
    );
  }
}
