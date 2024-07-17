import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Create from '../pages/Create'
import Home from '../pages/Home'


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
        }
      ]
    },
  ]);

  export default router;