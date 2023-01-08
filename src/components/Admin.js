import React from "react";
import  {BASE_URL} from './base';

const Admin=()=> {


  const logOut = async (e) => {
    e.preventDefault()

    const res = await fetch(`${BASE_URL}/profile` , {
       
        method : "GET" 
        
    })
    const data = await res.json()
    console.log(data)
    alert(data.message)
    // if(data.data){
    //     navigate('/login')
    // }
}
  

  return (
    <div>
      <div >admin</div>
      <button className="btn btn-success" onClick={logOut}>Log out</button>
    </div>
  );
}

export default Admin;
