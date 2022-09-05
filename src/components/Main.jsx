import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Inbox from "./Inbox";
import Layout from "./Layout";
import NoMatch from "./NoMatch";
import Login from "./Login";
import Email from "./Email";

function Main() {
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    let goTo = useNavigate();
    useEffect(()=>{
        if(!isLoggedIn){
            goTo("/Login")
        }
    })
    
    return (
        <Routes>
            <Route path ="/login" element={<Login isLoggedIn ={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/inbox" element={<Inbox />} />
                <Route path="/inbox/:id" element={<Email/>}/>
                <Route path="*" element={<NoMatch/>}/>
            </Route>
        </Routes>
    )
}

export default Main