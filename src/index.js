import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './Index.css'
import reducer, { initialSatte } from './reducer'
import { StateProvider } from './StateProvider'



 

ReactDOM.render( 
   <StateProvider initialState={initialSatte} reducer={reducer}>
    <App/>
   </StateProvider>
    
  ,document.getElementById('root'))
