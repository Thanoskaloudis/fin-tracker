import React from 'react';
import Logo from '../../img/finance.png';
import './Sidebar.scss'
import { UilEstate } from '@iconscout/react-unicons';

const Sidebar = () => {
  return (
    <div>
      <div className="Sidebar">
         {/* logo */}
        <div className="logo">
          <img src={Logo} alt="" />
          <span>Tracker</span>
        </div>
         {/* menu */}
        <div className="menu">
          <div className="menuItem">
            <div>
              <UilEstate />
            </div>
            <div>dashboard</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar