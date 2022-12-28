import axios from 'axios';
import React, { useState,useEffect } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';

const LinkResult = ({inputValue}) => {
    const [shortenLink,setShortenLink]=useState("")
    const [copied, setCopied]=useState(false)
    const [loading,setLoding]=useState("false")
    const [error,setError]=useState("false")

    const fetchData=async()=>{
      try{
        setLoding(true)
        const res=await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
        setShortenLink(res.data.result.full_short_link);
      }catch(err){
        setError(err)
      }finally{
        setLoding(false)
      }
    }

    useEffect(() => {
      if(inputValue.length)
      fetchData()
    }, [inputValue]);


    useEffect(() => {
        const timer=setTimeout(() => {
            setCopied(false)
        }, 1000);
        return () => 
            clearTimeout(timer);
    }, [copied]);

    console.log(shortenLink)

    // if(loading){
    //   return <p className='noData'>Loading...</p>
    // }
    // if(error){
    //   return <p className='noData'>Something wne t wrong:(</p>
    // }


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

export default LinkResult
