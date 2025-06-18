import {Navigate} from "react-router-dom"
import Home from "../views/home";
import Vote from "../views/vote";
 
 const routers = [
    {
        path:'/home',
        element:<Home/>
    },

     {
         path: "/",
         element:<Navigate to="/home"/>
     }
]


export default routers