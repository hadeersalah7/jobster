import NavLinks from "./NavLinks";
import Logo from "../components/Logo";
import Wrapper from "../assets/wrappers/BigSidebar";
import { useSelector } from "react-redux";

const BigSidbar = () => {
    const { isSidebarOpen } = useSelector((store) => store.user);
    return (
        <Wrapper>
            <div
                className={
                    isSidebarOpen
                        ? "sidebar-container "
                        : "sidebar-container show-sidebar"
                }
            >
                <div className="content">
                    <header>
                        <Logo />
                    </header>
                    <NavLinks />
                </div>
            </div>
        </Wrapper>
    );
};

export default BigSidbar;
