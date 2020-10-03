import React from 'react'
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import './App.css'
import Chat from './Chat'
import Header from './Header'
import SideBar from './SideBar'
 

function App() {
    return (
        <div className="app">
         <BrowserRouter>
              <Header />
              <div className="app__body">
                 <SideBar />
     

               <Switch>
                   <Route path="/room/:roomId">
                        <Chat />
                   </Route>
                   <Route path="/">
                       <h2>Hey</h2>
                   </Route>
               </Switch>
             </div> 

         </BrowserRouter>
        </div>
    )
}

export default App