import React, { useState } from 'react';
import Logo from '../../img/finance.png';
import './Sidebar.scss';
import {
  UilEstate,
  UilPackage,
  UilChart,
  UilDatabase,
} from '@iconscout/react-unicons';

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: 'Dashboard',
  },
  {
    icon: UilPackage,
    heading: 'Products',
  },
  {
    icon: UilDatabase,
    heading: 'Database',
  },
  {
    icon: UilChart,
    heading: 'Analytics',
  },
];

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div>
      <div className="sidebar">
        {/* logo */}
        <div className="logo">
          <img src={Logo} alt="" />
          <span>Tracker</span>
        </div>
        {/* menu */}
        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={
                  selected === index
                    ? 'menuItem active'
                    : 'menuItem'
                }
                key={index}
                onClick={() => setSelected(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
