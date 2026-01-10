import { createBrowserRouter } from 'react-router-dom'
import GeekLayout from '../pages/GeekLayout'
import Login from '../pages/Login'
import AuthRoute from '../components/AuthRoute'
import Home from '../pages/Home'
import Article from '../pages/Article'
import Publish from '../pages/Publish'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthRoute><GeekLayout/></AuthRoute>,
    children: [
      {
        path: 'home',
        element: <Home/>
      },
      {
        path: 'article',
        element: <Article/>
      },
      {
        path: 'publish',
        element: <Publish/>
      }
    ]
  },
  {
    path: '/login',
    element: <Login/>
  }
])

export default router