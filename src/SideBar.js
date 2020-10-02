import React from 'react'
import './SideBar.css'

import CreateIcon from '@material-ui/icons/Create';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord' 
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import SideBarIcon from './SideBarIcon';

function SideBar() {
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
             <SideBarIcon Icon={InsertCommentIcon} title="Threads"/>

            <hr></hr>

             <SideBarIcon Icon={InsertCommentIcon} title="Threads"/>


        </div>
    )
}

export default SideBar
