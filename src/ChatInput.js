import React,{useState} from 'react'

import './ChatInput.css'
import firebase from './firebase'
import db from './firebase'
import { useStateValue } from './StateProvider'

function ChatInput({channelName,channelId}) { 
    const [input,setInput]=useState('') 
    const [{user}] =useStateValue()
    const sendMessage=e=>{ 
       e.preventDefault() 
       if(channelId){
           db.collection('collection').doc(channelId).collection({
            message:input,
            timestamp:firebase.firestore.FieldValue.serverTimeStamp(),
            user:user.displayName,
            userImage:user.photoURL
           })

       }


    }
    return (
        <div className="chatInput">
            <form >
                <input  value={input}  onChange={e=>setInput(e.target.value)} placeholder={`Message #${channelName}`} />
                <button type="submit" onClick={sendMessage}>Send</button>
            </form>
        </div>
    )
}

export default ChatInput
