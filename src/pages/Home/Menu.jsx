import React from 'react';
import { NavLink } from 'react-router-dom'; // Ensure you have react-router-dom installed

// Define inline styles
const styles = {
  sidebar: {
    height: '100%',
    // padding: '10px',
  },
  menuList: {
    listStyleType: 'none',
    padding: 0,
  },
  menuItem: {
    padding: '10px',
    margin: '5px 0',
    display: 'flex',
    alignItems: 'center',
  },
  menuIcon: {
    marginRight: '10px',
  },
  menuLink: {
    display: 'flex',
    alignItems: 'center',
  },
  activeMenuLink: {
    color: 'blue', // Change as needed
  },
  // Add additional styles as needed
};

const Menu = () => {
  const menuItems = [
    { name: 'Betwork Board', icon: '📋', link: '/betwork-board' },
    { name: 'My Bets', icon: '🔒', link: '/my/bets' },
    { name: 'Live Bets', icon: '🔴', link: '/odds' },
    { name: 'Manage Funds', icon: '💰', link: '/funds' },
    { name: 'Friends', icon: '👥', link: '/friends' },
    { name: 'Betwork Group', icon: '👥', link: '/betwork-group' },
    { name: 'Find Friends', icon: '🔍', link: '/find-friends' },
    { name: 'Edit Profile', icon: '✏️', link: '/edit-profile' },
    { name: 'Change Password', icon: '🔑', link: '/change-password' },
  ];

  return (
    <div style={styles.sidebar}>
      <ul style={styles.menuList}>
        {menuItems.map((item, index) => (
          <li key={index} style={styles.menuItem}>
            <NavLink
              to={item.link}
              style={styles.menuLink}
              activeStyle={styles.activeMenuLink}
            >
              <span style={styles.menuIcon}>{item.icon}</span>
              <span>{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
