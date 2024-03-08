import { useState } from "react"

export default function Team (){
  const [team,setTeam]=useState(11)
    const b={
        border:'2px solid purple',
        margin:'15px',
        padding:'15px',
        borderRadius:'15px'
    }
    const add=()=>{
const newc=team+1;
setTeam(newc)
    }
    const remove=()=>{
const newc=team-1;
setTeam(newc)
    }
    return(
        <div style={b}>
            <h3>Players:{team}</h3>
            <button onClick={add}>Add</button>
            <button onClick={remove}>Remove</button>
        </div>
    )
}