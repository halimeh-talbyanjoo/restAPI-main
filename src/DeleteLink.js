import React ,{useState} from 'react'

const DeleteLink = () => {
    const [token] = useState(localStorage.getItem('token'))
    alert(token)

  const deleteLink = async (e) => {
    e.preventDefault()

    const res = await fetch("http://localhost:8082/delete-link?id=12" , {
        hheaders: {
            token
        },
        method : "DELETE" 
        
        
    })
    const data = await res.json()
    console.log(data)
    alert(data.message)
}
  return (
    <div>
      <div>delete-link</div> 
     <button className="btn btn-success" onClick={deleteLink}>delete-link</button>
    </div>
  )
}

export default DeleteLink
