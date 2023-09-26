import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Home from './Pages/Home.jsx';
import Project from './Pages/Project.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';



     
  

const router = createBrowserRouter([

  
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/Home",
    element: <Home />,
  },

  {
    path: "/Project",
    element: <Project />,
  },

  {
    path: "/About",
    element: <About />,
  },

  {
    path: "/Contact",
    element: <Contact />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);