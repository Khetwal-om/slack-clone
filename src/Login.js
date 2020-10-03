import React from 'react'
import { Button } from '@material-ui/core'

import './Login.css'
import { auth, provider } from './firebase'
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'

function Login() { 
    const [state,dispatch]=useStateValue() 
 
    const signIn=() => {
        auth
        .signInWithPopup(provider)
        .then(result=>{
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        })
    }
    console.log(state)
    return (
        <div className="login"> 
         <div className="login__container">
       
       
       
             <img src="https://static.surveysparrow.com/site/assets/integrations/inner/slack.png" alt=""/>
             <Button className="button" onClick={signIn}>Sign in with Google</Button>

         </div>
        </div>
    )
}

export default Login
