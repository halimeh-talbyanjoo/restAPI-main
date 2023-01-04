import React from "react";

const Admin=()=> {


  const logOut = async (e) => {
    e.preventDefault()

    const res = await fetch("http://link.pishroapp.net/profile" , {
       
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
