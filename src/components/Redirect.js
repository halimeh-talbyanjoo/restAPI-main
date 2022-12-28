import { useState } from 'react';
import BackgroundAnimation from './BackgroundAnimation';
import InputShortener from './InputShortener';
import LinkResult from './LinkResult';

function Redirect() {
  const [inputValue, setInputValue]=useState("")
  return (
    <div className="container">
     <InputShortener setInputValue={setInputValue}/>
     <BackgroundAnimation/>
     <LinkResult inputValue={inputValue}/>
    </div>
  );
}

export default Redirect;
