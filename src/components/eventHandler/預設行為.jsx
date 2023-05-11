import styles from 'components/eventHandler/handStyle.module.scss'

//  Preventing default behavior 
// Some browser events have default behavior associated with them.For example, a < form > submit event, which happens when a button inside of it is clicked, will reload the whole page by default:
export default function Signup() {
  return (
    <form onSubmit={() => alert('Submitting!')}>
      <input />
      <button>Send</button>
    </form>
  );
}

// You can call e.preventDefault() on the event object to stop this from happening:
export default function Signup() {
  return (
    <form onSubmit={e => {
      e.preventDefault();
      alert('Submitting!');
    }}>
      <input />
      <button>Send</button>
    </form>
  );
}
