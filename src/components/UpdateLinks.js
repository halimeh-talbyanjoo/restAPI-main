import React,{useState} from "react";

const UpdateLinks = () => {
    const [id, setId] = useState([])
    const [url, setUrl] = useState([])
    const [token] = useState(localStorage.getItem('token'))
    alert(token)

  const updateLinks = async (e) => {
    e.preventDefault()

    const res = await fetch("http://link.pishroapp.net/update-link" , {
        hheaders: {
            token
        },
        method : "PUT" ,
        body : {
            id,
            url
        }
        
    })
    const data = await res.json()
    console.log(data)
    alert(data.message)
}
  return (
    <div>
     <div>updatelinks</div> 
     <button className="btn btn-success" onClick={updateLinks}>updatelinks</button>
    </div>
  )
}

export default UpdateLinks
