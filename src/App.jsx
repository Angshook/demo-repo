 

/* without using context api
 function App(){
  const [count,setcount]=useState(0);
  return(
    <div>
      <Count count={count}/>
      <Button count={count} setcount={setcount}/>
    </div>
  )
 }

 function Count({count}){ 
  return <div>
      {count}
    </div>
 }

 function Button({count,setcount}){
  return <div>
    <button onClick={()=>{
      setcount(count+1)
    }}>Tap to Increase</button>
    <button onClick={()=>{
      setcount(count-1)
    }}>tap to decrease</button>
  </div>
 }*/


//using context api

import { useContext, useState } from "react"
import {CountContext} from "./context.jsx"

function App() {
  const [count, setCount] = useState(0);

  //wrap anyone who wants to use the teleported value inside a provider
  
  return (
    <div>
      <CountContext.Provider value={count}>
        <Count count={count} setCount={setCount} />
      </CountContext.Provider>
    </div>
  )
}

function Count({setCount}) {
  return <div>
    <CountRenderer/>
    <Buttons  setCount={setCount} />
  </div>
}

function CountRenderer({count}){

  const count =useContext(CountContext)
  
  return <div>
    {count}
  </div>
}

function Buttons({ setCount}) {
  const count=useContext(CountContext);


  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}

export default App
