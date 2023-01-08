import React ,{useEffect,useState} from "react"
import {CopyToClipboard} from 'react-copy-to-clipboard';
import axios from 'axios';
import  {BASE_URL} from './base';

function Redirect({inputValue}) {
  const [shortenLink,setShortenLink]=useState("Hello world!")
    const [copied, setCopied]=useState(false)
    const [loading,setLoding]=useState("false")
    const [error,setError]=useState("false")

    const fetchData=async()=>{
      try{
        setLoding(true)
        const res=await axios(`${BASE_URL}/u/${inputValue}`)
        console.log(res)
        setShortenLink(res.data.result.full_short_link);
      }catch(err){
        setError(err)
      }finally{
        setLoding(false)
      }
    }


//   const fetchData = async() => {
//     const res = await fetch(`http://link.pishroapp.net/u/${inputValue}` , {

//         method : "GET" 
        
        
//     })
//     setShortenLink(res.data.result.full_short_link);

//     // const data = await res.json()

//     // console.log(data)
//     // alert(data.message)
// }
useEffect(() => {
  if(inputValue.length)
  fetchData()
}, [inputValue]);

  return (
    <div className='result'>
      <p>{shortenLink}</p>
      <CopyToClipboard 
      text={shortenLink}
      onCopy={() => setCopied(true)}>
          <button className={copied ? "copied":""}>Copy to clipboard</button>
        </CopyToClipboard>

      
    </div>
  )
}

export default Redirect;
