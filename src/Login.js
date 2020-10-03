import React from 'react'
import { Button } from '@material-ui/core'

import './Login.css'
import { auth, provider } from './firebase'

function Login() {
    const signIn=() => {
        auth
        .signInWithPopup(provider)
        .then(result=>{

        })
    }
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
