import React, {useState} from 'react';
import BackgroundAnimation from "./BackgroundAnimation"
import {useNavigate} from "react-router";



const CreateLink =()=> {
    const navigate = useNavigate()
    const [url, setUrl] = useState([])
    const [token] = useState(localStorage.getItem('token'))
    console.log(token)
    const getUrl = async (e) => {
        e.preventDefault()

        const res = await fetch("http://link.pishroapp.net/create-link" , {
            headers: {
                token
            },
            method : "POST" ,
            body : {
                url
            }
        })
        const data = await res.json()
        console.log(data)
        alert(data.message)
        if(data.data){
            navigate('/login')
        }
    }
    
    return (
    <>
    <form onSubmit={getUrl}
                  className="col-5 bg-danger flex-wrap d-flex justify-content-center align-items-center p-2 ">
        <label className="col-12   p-2 d-flex justify-content-center align-items-center ">
            <input type="text" className="col-12 p-2 rounded" placeholder="http://example.com"
                   onInput={e => setUrl(e.target.value)}/>
        </label>
        <div className="col-12 d-flex justify-content-center align-items-center my-2">
            <button className="btn btn-success"  >create</button>
        </div>
    </form>
    
    </>
   ) 
}

export default CreateLink;