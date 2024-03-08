import { useEffect, useState } from "react"

export default function Users(){
    const [users,setUsers]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then (dat=>setUsers(dat))
    },[])
    return(
        <div>
<h3>Usrs:{users.length}</h3>
        </div>
    )
}