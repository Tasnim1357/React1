import { useState } from "react"

export default function Counter(){
    const [count, setCount]=useState(0);

    const click=()=>{
const newc=count+1;
setCount(newc)
    }
    const reduce=()=>{
        const newc=count-1;
        setCount(newc)
    }
  
    return(
        <div style={{border:'2px solid yellow'}}>
            <h3>
                Counter:{count}
            </h3>
            <button onClick={click}>Add</button>
            <button onClick={reduce}>Reduce</button>
        </div>
    )
}