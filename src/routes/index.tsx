import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from '../views/Home'
import { Detail } from '../views/Detail'
import { Error404 } from '../views/Error404'
import { Profile } from '../views/Profile'
import { LikedEvents } from '../views/Profile/Components/LikedEvents'
import { MyInfo } from '../views/Profile/Components/MyInfo'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: '/detail/:detailId',
    element: <Detail />,
  },
  {
    path: '/profile',
    element: <Profile />,
    children :[
      {
        path: 'my-info',
        element: <MyInfo />
      },{
        path: 'liked-events',
        element: <LikedEvents />
      },
    ],
  },
])

export const Routes = () => {
  return <RouterProvider router={router} />
}
