import React,{useState} from "react";

const ListOfLink=()=> {

    const [token] = useState(localStorage.getItem('token'))
    alert(token)

  const listOfLink = async (e) => {
    e.preventDefault()

    const res = await fetch("http://link.pishroapp.net/list-links" , {
        headers: {
            token
        },
        method : "GET" 
        
    })
    const data = await res.json()
    console.log(data)
    alert(data.message)
}
  

  return (
    <div>
      <div >ListOfLink</div>
      <button className="btn btn-success" onClick={listOfLink}>listoflink</button>
    </div>
  );
}

export default ListOfLink;
