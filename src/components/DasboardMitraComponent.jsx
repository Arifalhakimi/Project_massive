// Sidebar.jsx

import { NavLink } from 'react-router-dom';
import { AiOutlineHome, AiOutlineUser, AiOutlineSetting } from 'react-icons/ai';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <NavLink to="/" className="sidebar-link" activeClassName="active-link">
                <AiOutlineHome />
                Home
            </NavLink>
            <NavLink to="/profile" className="sidebar-link" activeClassName="active-link">
                <AiOutlineUser />
                Profile
            </NavLink>
            <NavLink to="/settings" className="sidebar-link" activeClassName="active-link">
                <AiOutlineSetting />
                Settings
            </NavLink>
        </div>
    );
};

export default Sidebar;
