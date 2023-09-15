
import {createBrowserRouter} from "react-router-dom";
import Login from "../page/Login";
import App from "../App";
import NotFound from '../page/NotFound'
 

  const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    }, 
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '*',
        element: <NotFound/>
    }
  ])


  export default router