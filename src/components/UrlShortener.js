import { useState } from 'react';
import BackgroundAnimation from './BackgroundAnimation';
import CreateLink from './createLink';
import Redirect from './Redirect';

function UrlShortener() {
  const [inputValue, setInputValue]=useState([])
  return (
    <div className="container">
     <CreateLink setInputValue={setInputValue}/>
     <BackgroundAnimation/>
     <Redirect inputValue={inputValue}/>
    </div>
  );
}

export default UrlShortener;
