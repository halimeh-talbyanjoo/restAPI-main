import "./bootsrtap.css"
import Register from "./components/auth/register";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/auth/login";
import Redirect from "./components/Redirect";
import CreateLink from "./components/createLink";
import NavBar from "./components/NavBar";
import Admin from "./components/Admin";
import ListOfLink from "./components/ListOfLinks";
import UpdateLinks from "./components/UpdateLinks";
import DeleteLink from "./components/DeleteLink";
import './App.css';
import BackgroundAnimation from "./components/BackgroundAnimation";



function App() {
  return (
    <div className="App col-12 d-flex justify-content-center align-items-center vh-100">
      <BackgroundAnimation/>
        <BrowserRouter>
        <NavBar/>

            <Routes>
                <Route path="/" element={<CreateLink />}/>
                <Route path="login" element={<Login />}/>
                <Route path="register" element={<Register />}/>
                <Route path="redirect" element={<Redirect />}/>
                <Route path="admin" element={<Admin />}/>
                <Route path="list-links" element={<ListOfLink />}/>
                <Route path="update-link" element={<UpdateLinks />}/>
                <Route path="delete-link?id=12" element={<DeleteLink />}/>
                
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
