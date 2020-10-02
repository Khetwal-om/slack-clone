import { Avatar } from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import  HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import  SearchIcon from '@material-ui/icons/Search'


import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className="header">
           
             <div className="header__left">
                 <Avatar className="header__avatar" 
                //    alt={user?.displayName}
                //    alt={user?.photoURL}
                />
                <AccessTimeIcon />
             </div>

             <div className="header__search">
                 <SearchIcon />
                 <input placeholder="search anything" type="text"                 /> 
             </div>
<div className="header__right">
    <HelpOutlineIcon />
</div>
        </div>
    )
}

export default Header
