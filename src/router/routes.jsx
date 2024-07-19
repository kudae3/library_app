import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Create from '../pages/Create'
import Home from '../pages/Home'
import Detail from "../pages/Detail";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        
        {
            path: '/',
            element: <Home/>
        },        
        {
            path: '/create',
            element: <Create/>
        }, 
        {
           path: '/book/:id',
           element: <Detail/>
        }
      ]
    },
  ]);

  export default router;