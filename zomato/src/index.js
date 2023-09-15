import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
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
import Shimmer from './component/Shimmer';
import FormData from './component/FormData';

// import Grocery from "./component/Grocery";

const Grocery = lazy(() => import("./component/Grocery"));
const Cart=lazy(()=> import('./component/Cart') )
const Mart=lazy(()=>import('./component/Mart'))

const root = ReactDOM.createRoot(document.getElementById('root'));
const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<Error />}>
      <Route index path="/" element={<Body />} />
      <Route path="about" element={<About />} />
      <Route
        path="contact"
        element={
            <Contact />
          
        }
      />
      <Route
      path='form'

      element={
        <FormData/>
      }
      />
      <Route path="grocery">
        <Route
          index
          element={
            <Suspense fallback={<h1>Loading....</h1>}>
              <Grocery />
            </Suspense>
          }
        />
      </Route>
      <Route path='mart'>
        <Route index element={
          <Suspense  fallback={<Shimmer/>}>
            <Mart/>
          </Suspense>
        }/>
      </Route>

     <Route  path='cart'>
      <Route index element={
        <Suspense  fallback={<Shimmer/>}>
          <Cart/>
        </Suspense>
      } />
     </Route>
      <Route path="restaurant/:resId" element={<RestaurantMenu />} />
      <Route path="/login" element={<Protected element={<Login />} />} />
    </Route>
  )
);


root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
