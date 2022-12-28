import "./bootsrtap.css"
import Register from "./components/auth/register";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/auth/login";
import Redirect from "./components/Redirect";
import CreateLink from "./components/createLink";
import './App.css';
import BackgroundAnimation from "./components/BackgroundAnimation";
function App() {
  return (
    <div className="App col-12 d-flex justify-content-center align-items-center vh-100">
      <BackgroundAnimation/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Register />}/>
                <Route path="login" element={<Login />}/>
                <Route path="create_link" element={<CreateLink />}/>
                <Route path="redirect" element={<Redirect />}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
