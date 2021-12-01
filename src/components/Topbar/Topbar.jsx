import React from 'react'
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

import './topbar.css'
const Topbar = () => {
    return (
        <div className="topbar">

            <div className="topbarWrapper">
                <div className="topbarLeft">
                        <span className="logo">BrandLogo</span>
                    </div>
                    <div className="topbarRight">
                        <div className="topbarIconContainer">
                            <NotificationsNone/>
                            <span className="topIconBadge">2</span>

                        </div>
                        <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />

                
            </div>
                
            </div>
            
        </div>
    )
}

export default Topbar
