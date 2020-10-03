import React,{useState,useEffect} from 'react'
import './SideBar.css'

import CreateIcon from '@material-ui/icons/Create';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord' 
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import SideBarIcon from './SideBarIcon';
import db from './firebase';

function SideBar() {
    const [channels,setChannels]=useState([])
    useEffect(()=>{
        // useEffect is dependent on our []
        db.collection('collection').onSnapshot(snapshot=> (
            setChannels(snapshot.docs.map(doc=> ({ 
                id: doc.id,
                name: doc.data().name
            })))
        ))
    },[])
    return (
        <div className="sidebar">
             <div className="sidebar__header">
                <div className="sidebar__info">     
                    <h2>Slack header</h2>
                    <h3>
                        <FiberManualRecordIcon /> OM
                    </h3>
                </div>
                <CreateIcon />
                  
            
            
             </div> 
             <SideBarIcon Icon={InsertCommentIcon} title="Threads"/>

             <SideBarIcon Icon={InsertCommentIcon} title="Threads"/>
             <SideBarIcon Icon={InsertCommentIcon} title="add" addChannelOption/>
        
            <hr></hr>

             <SideBarIcon Icon={InsertCommentIcon} title="Threads"/>
             {channels.map(channel=> (
                 <SideBarIcon title={channel.name} id={channel.id} />
             ))}


        </div> 
    )
}

export default SideBar
