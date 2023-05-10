//命名原則，你也可以自定event 的名字，就像 onClick .  on 的後面第一個字要大寫。 onEatting . .. 
// 簡單的說就是為 props 命名而已。只有要照上述的習俗命名

function Button({ onSmash, children }) {
  return (
    <button onClick={onSmash}>   //還是要先在這裏定義 不能直接在這改成 onSmash={onSmash}
      {children}
    </button>
  );
}

export default function newApp() {
  return (
    <div>
      <Button onSmash={() => alert('Playing!')}>  
        Play Movie
      </Button>
      <Button onSmash={() => alert('Uploading!')}>
        Upload Image
      </Button>
    </div>
  )
}
//prop 的名稱onSmash 就可以傳給<Button>
 

 