export default function Frnd1 ({friend}){
    console.log(friend);
   const {name,email}=friend;
    return(
        <div className="box">
            <h4>Name:{name}</h4>
            <p>Email:{email}</p>
        </div>
    )
}