// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './assets/Team'
import Users from './assets/User'
import Frnd from './assets/Frnd'
function App() {
  // const [count, setCount] = useState(0)

  function click(){
    alert('button clicked')
  }
 const click2=()=>{
     alert('button 2 clicked')
 }
 const add5=(n)=>{
  alert(n+5)
 }
  return (
    <>
      
      <h1>React core concepts 2</h1>
       <Counter></Counter>
       <Team></Team>
       <Users></Users>
    <Frnd></Frnd>
      <button onClick={click}>Click me</button>
      <button onClick={click2}>Click me2</button>
      <button onClick={()=>{
        alert('Hello')
      }}>Click me3</button>
       <button onClick={()=>{
        add5(5)
       }}>Click me2</button>
     
    </>
  )
}

export default App
