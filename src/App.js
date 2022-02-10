import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import styled from "styled-components";
import Chat from "./components/Chat";
import {useAuthState} from "react-firebase-hooks/auth"
import {auth} from './firebase'
import Login from "./components/Login";
import "./App.css";
import Spinner from "react-spinkit";

function App() {

  const [user, loading] = useAuthState(auth);

  if(loading){
    return(
      <AppLoading>
        <AppLoadingContents>
         <img src="https://edge.alluremedia.com.au/m/g/2020/05/slack.jpg"/>
         <Spinner
           name="ball-spin-fade-loader"
           color="purple"
           fadeIn="none"
           />
        </AppLoadingContents>
      </AppLoading>
    )
  }

  return (
    <div className="App">
      <Router>

        {!user ? ( 
        
        <Login/>
        
        ) : (

        <>
        <Header />
        <AppBody>
          <SideBar/>
          <Routes>
            <Route path="/" element={<Chat/>}>
              
            </Route>
          </Routes>
        </AppBody>
        </>

        )}
        
      </Router>
    </div>
  );
}

export default App;


const AppBody = styled.div`
     display:flex;
     height:100vh;
`;

const AppLoading = styled.div`
  
   display: grid;
   place-items: center;
   height: 100vh;
   width: 100%;
 
`;

const AppLoadingContents = styled.div` 

  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  >img {
    height:100px;
    padding:20px;
    margin-bottom: 40px;
  }`;