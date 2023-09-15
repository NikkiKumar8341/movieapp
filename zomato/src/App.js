import logo from './logo.svg';
import './App.css';
import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import {
  Outlet,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";
import Profile from "./component/Profile";
import Login from "./component/Login";
import Protected from "./component/Protected";
import { useState } from 'react';
import { useEffect } from 'react';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

function App() {

  const [userName,setUserName]=useState();

  useEffect(()=>{

    const data={
      name:'Nikhil Kumar'
    }

    setUserName(data.name)
  },[])

  return (
    <Provider store={appStore}>
    <UserContext.Provider   value={{loggedInUser:userName,setUserName}}>
    <div>
     <Header/>
     <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
  );
}

export default App;
