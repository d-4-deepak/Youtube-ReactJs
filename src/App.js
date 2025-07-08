import React from 'react'
import Head from './components/Head'
import Body from './components/Body'
import { Provider } from 'react-redux'
import store from './utils/store'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainContainer from './components/MainContainer'
import WatchPage from './components/WatchPage'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>
      }
      ,
      {
        path:"watch",
        element:<WatchPage/>
      }
    ]
  }
])

const App = () => {
  return (
    <Provider store={store}>
    <div className="min-h-screen w-full overflow-x-hidden box-border">
        <Head/>
        {/* <Body/> Replaces this body compo to appRouter */}
       <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  )
}

/**
 * Head
 * Body
 *  Sidebar
 *    MenuItems
 *  MainContainer
 *     ButtonList
 *     VideoContainer
 *       VideoCard
 */

export default App
