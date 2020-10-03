
import React,{useEffect,useState} from 'react'

import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons'
import {useParams} from 'react-router-dom'
 
import './Chat.css'
import db from './firebase'
import Message from './Message'

 
function Chat() {
    const {roomId}=useParams()
    const [roomDetails,setRoomDetails]=useState(null)
    const [roomMessages,setRoomMessages]=useState([])
      
    
    useEffect(()=>{
          if(roomId){ 
              db.collection('collection').doc(roomId).onSnapshot(snapshot=> (   
                    setRoomDetails(snapshot.data())
              ))
          }
          db.collection('collection').doc(roomId).collection('messages').orderBy('timestamp','asc').onSnapshot(snapshot=>
              setRoomMessages(snapshot.docs.map(doc=>doc.data()))
          )
    },[roomId])
    return (
        <div className="chat">
            <div className="chat__header">
                 <div className="chat__headerLeft">
                   <h4 className="chat__channelName">                           
                    <strong>#  {roomDetails ? roomDetails.name : ''} </strong>  
                    <StarBorderOutlined />
                   
                   </h4> 
 
                 </div>
                 <div className="chat__headerRight">
                     <p> 
                        <InfoOutlined />Details
                     </p>
                 </div>
            </div>
            <div className="chat__messages">
              {
                  roomMessages.map(({message,timeStamp,userImage,user})=>
                   <Message 
                      message={message}
                      timeStamp={timeStamp}
                      userImage={userImage}
                      user={user}
                    />
                  )
              }
            </div>
        </div>
    )
}

export default Chat












// roomDetails?.name  