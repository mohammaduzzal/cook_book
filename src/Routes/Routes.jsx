import { createBrowserRouter } from "react-router-dom"
import MainLayouts from "../Layouts/MainLayouts"
import Home from "../Pages/Home/Home"
import Coffes from "../Pages/Coffes/Coffes"
import Dashboard from "../Pages/Dashboard/Dashboard"

const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayouts></MainLayouts>,
      children:[
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: '/Coffes',
          element: <Coffes></Coffes>,
        },
        {
          path: '/Dashboard',
          element: <Dashboard></Dashboard>,
        },
      ]
    }
  ])


  export default routes