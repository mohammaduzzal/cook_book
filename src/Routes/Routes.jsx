import { createBrowserRouter } from "react-router-dom"
import MainLayouts from "../Layouts/MainLayouts"
import Home from "../Pages/Home/Home"
import Coffes from "../Pages/Coffes/Coffes"
import Dashboard from "../Pages/Dashboard/Dashboard"
import CoffeeCards from "../Components/CoffeeCards/CoffeeCards"

const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayouts></MainLayouts>,
      children:[
        {
          path: '/',
          loader: ()=> fetch('../categories.json'),
          element: <Home></Home>,
          children:[
            {
              path:'/',
              element: <CoffeeCards></CoffeeCards>,
              loader: () => fetch('../coffees.json')

            },
            {
              path:'/category/:category',
              element: <CoffeeCards></CoffeeCards>,
              loader: () => fetch('../coffees.json')

            },
          ]
        },
        {
          path: '/Coffes',
          element: <Coffes></Coffes>,
          loader: () => fetch('../coffees.json')
        },
        {
          path: '/Dashboard',
          element: <Dashboard></Dashboard>,
        },
      ]
    }
  ])


  export default routes