import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { sideBarlink } from "../data/index";
import Hana from "../assets/img/testimonial/hana.png";

const Sidebar = () => {
    const [activeLink, setActiveLink] = useState(null);

    return (
        <div className="sidebar">
            <div className='gambar-profile-mitra mb-2'>
                <img src={Hana} alt="" />
                <div className='text-profile text-center mt-1'>
                    <h6>Hana Husna</h6>
                    <p>Faiz Bengkel</p>
                </div>
            </div>
            <div className='sidebar-content-link'>
                {sideBarlink.map((Links) => (
                    <div key={Links.id} className='sidebar-link'>
                        <NavLink
                            to={Links.path}
                            activeClassName={activeLink === Links.path ? 'active' : ''}
                            onClick={() => setActiveLink(Links.path)}
                        >
                            <div className='sidebar-text d-flex ' >
                                {Links.icon}
                                <h6> {Links.text} </h6>
                            </div>
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
