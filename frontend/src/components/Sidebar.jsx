import React from 'react';
import { NavLink } from 'react-router';
import {
  FaHome,
  FaTable,
  FaBox,
  FaTruck,
  FaShoppingCart,
  FaSignOutAlt,
  FaUsers,
  FaCog
} from 'react-icons/fa';

const Sidebar = () => {
  const menuItems = [
    {
      name: 'Dashboard',
      path: '/admin-dashbard',
      icon: <FaHome />
    },
    {
      name: 'Categories',
      path: '/admin-dashbard/categories',
      icon: <FaTable />
    },
    {
      name: 'Products',
      path: '/admin-dashbard/products',
      icon: <FaBox />
    },
    {
      name: 'Suppliers',
      path: '/admin-dashbard/suppliers',
      icon: <FaTruck />
    },
    {
      name: 'Orders',
      path: '/admin-dashbard/orders',
      icon: <FaShoppingCart />
    },
    {
      name: 'Users',
      path: '/admin-dashbard/users',
      icon: <FaUsers />
    },
    {
      name: 'Profile',
      path: '/admin-dashbard/profile',
      icon: <FaCog />
    },
    {
      name: 'Logout',
      path: '/admin-dashbard/logout',
      icon: <FaSignOutAlt />
    }
  ];

  return (
    <div className="flex flex-col h-screen p-3 bg-black text-white w-16 md:w-64 shadow-lg fixed">
      <div className="h-16 flex items-center justify-center">
        <span className="hidden md:block text-xl font-bold">Inventory MS</span>
        <span className="md:hidden text-xl font-bold">IMS</span>
      </div>
      <div>
        <ul className="space-y-2 p-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className="flex items-center p-2 rounded-lg hover:bg-gray-700 text-white gap-2"
                activeClassName="bg-gray-800"
              >
                <span className="text-lg">{item.icon}</span>
                <span className="hidden md:inline">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
