import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FullName from './Component/Profile/FullName';
import Adress from './Component/Profile/Adress';
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import "./Component/Profile/FullName.css";
import"./Component/Profile/Adress.css";


function App() {
  return (
    <div className="App">
    <h1> My card profile</h1>
    <ProfilePhoto/>
    <FullName/>
    <Adress/> 
     
    </div>
  );
}

export default App;
