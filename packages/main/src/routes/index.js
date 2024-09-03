import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Home from "../pages";
import Chat from '../pages/chat'
import Page404 from '../pages/page404'
import Settings from '../pages/settings'
import SettingsPage from '../pages/settings/settingsPage'
import SignIn from "../pages/signIn";
import SignOut from "../pages/signUp";
import { Blank } from '@zio/components'

const router = createBrowserRouter([{
  path: "/",
  element: <App/>,
  children: [
    {
      path: "", // 루트외 다른거 없을 때
      element: <Home/>
    },{
      path: "chat",
      element: <Chat/>,
      children: [
        {
          path: ':userId',
          element: <Blank/>
        }
      ]
    },{
      path: "settings",
      element: <Settings/>,
      children: [{
        path: ':page',
        element: <SettingsPage/>
      }]
    },{
      path: "signin",
      element: <SignIn/>
    },{
      path: "signup",
      element: <SignOut/>
    },{
      path: "*", // 그 외 모든 것
      element: <Page404/>
    }
  ]
}])

export default router