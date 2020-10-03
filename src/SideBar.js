import React,{useState,useEffect} from 'react'
import './SideBar.css'

import CreateIcon from '@material-ui/icons/Create';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord' 
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import SideBarIcon from './SideBarIcon';
import db from './firebase';
import { Add, Apps, Drafts, ExpandLess, ExpandMore, Inbox, PeopleAlt } from '@material-ui/icons';
import { useStateValue } from './StateProvider';







function SideBar() {
    const [channels,setChannels]=useState([])
    const [{user}]=    useStateValue()
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
                        <FiberManualRecordIcon /> {user?.displayName}
                    </h3>
                </div>
                <CreateIcon />
                  
            
            
             </div> 
             <SideBarIcon Icon={InsertCommentIcon} title="Threads"/>

             <SideBarIcon Icon={Inbox} title="inbox"/>
             <SideBarIcon Icon={ExpandLess} title="Show less"/>

             <SideBarIcon Icon={ExpandMore} title="channels"/>
             <SideBarIcon Icon={Add} title="add" addChannelOption/>
        
            <hr></hr>

             <SideBarIcon Icon={InsertCommentIcon} title="Threads"/>
             {channels.map(channel=> (
                 <SideBarIcon title={channel.name} id={channel.id} />
             ))}


        </div> 
    )
}

export default SideBar
