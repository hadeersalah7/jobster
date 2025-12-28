import React from "react";
import { links } from "../utils/links";
import { NavLink } from "react-router-dom";
const NavLinks = ({ toggleSidebar }) => {
    return (
        <div className="nav-links">
            {links.map((link) => {
                const { id, path, title, icon } = link;
                return (
                    <NavLink
                        to={path}
                        key={id}
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                        end
                        onClick={toggleSidebar}
                    >
                        <span className="icon">{icon}</span>
                        {title}
                    </NavLink>
                );
            })}
        </div>
    );
};

export default NavLinks;
