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
                <Route path="/auth/login" element={<Login />}/>
                <Route path="/auth/register" element={<Register />}/>
                <Route path="redirect" element={<Redirect />}/>
                {/*todo change Admin to Profile*/}
                <Route path="profile" element={<Admin />}/>
                <Route path="link/list" element={<ListOfLink />}/>
                {/*todo two following routes should take the {id}*/}
                <Route path="link/update" element={<UpdateLinks />}/>
                <Route path="link/delete" element={<DeleteLink />}/>
                
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
