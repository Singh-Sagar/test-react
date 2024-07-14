import { useState } from 'react'


const App = () => {
  const [counter, setCounter] = useState(0);
  console.log(counter);
  
  // const handleClick = ()=>{
  //   console.log('clicked');
  //   setCounter(counter+1);
  // }
    //  setTimeout(
    //   ()=>setCounter(counter+1),
    //   1000);
    //   console.log('rendering', counter);
     return(
      <div>{counter}
        <button onClick={()=>{
          console.log('i was clicked');
          return setCounter(counter+1);
        }}>
          plus
        </button>
        <button onClick={()=>{
          console.log('that was me');
          setCounter(0);
        }}>
          zero
        </button>
      </div>
     )
}
  
  export default App