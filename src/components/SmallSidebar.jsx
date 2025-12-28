import Wrapper from "../assets/wrappers/SmallSidebar";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../features/user/userSlice";
import { links } from "../utils/links";

const SmallSidebar = () => {
    const { isSidebarOpen } = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const toggle = () => {
        dispatch(toggleSidebar());
    };
    return (
        <Wrapper>
            <div
                className={
                    isSidebarOpen
                        ? "sidebar-container show-sidebar"
                        : "sidebar - container"
                }
            >
                <div className="content">
                    <button onClick={toggle}>
                        <FaTimes />
                    </button>
                    <header>
                        <Logo />
                    </header>
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
                                >
                                    <span className="icon">{icon}</span>
                                    {title}
                                </NavLink>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default SmallSidebar;
