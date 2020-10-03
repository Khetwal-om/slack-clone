import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons'
import React from 'react'
import {useParams} from 'react-router-dom'
 
import './Chat.css'

 
function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                 <div className="chat__headerLeft">
                   <h4 className="chat__channelName">                           
                    <strong>#  general </strong>
                    <StarBorderOutlined />
                   
                   </h4> 
 
                 </div>
                 <div className="chat__headerRight">
                     <p> 
                        <InfoOutlined />Details
                     </p>
                 </div>
            </div>
        </div>
    )
}

export default Chat
