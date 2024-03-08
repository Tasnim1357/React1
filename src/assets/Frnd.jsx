import { useEffect, useState } from 'react'
import './frnd.css'
import Frnd1 from './Frnd1';

export default function Frnd(){

    const [friends,setFrnd]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data=>setFrnd(data))

    },[])

 return(
    <div className='box'>
        <h3>Friends:{friends.length}</h3>
        {
            friends.map(friend =><Frnd1 friend={friend}></Frnd1>)
        }
    </div>
 )
}