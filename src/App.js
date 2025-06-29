import React from 'react'
import Head from './components/Head'
import Body from './components/Body'
import { Provider } from 'react-redux'
import store from './utils/store'

const App = () => {
  return (
    <Provider store={store}>
    <div className="min-h-screen w-full overflow-x-hidden box-border">
        <Head/>
        <Body/>
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
