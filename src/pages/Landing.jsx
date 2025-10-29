import { Link } from "react-router-dom";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
const Landing = () => {
    return (
        <Wrapper>
            <main>
                <nav>
                    <Logo />
                </nav>
                <div className="container page">
                    {/* Info */}
                    <div className="info">
                        <h1>job <span>tracking</span> app</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam placeat accusamus atque animi! Corrupti excepturi iste nihil adipisci debitis voluptatibus enim, culpa repellendus minima. Debitis quos eveniet animi obcaecati necessitatibus.</p>
                        <Link to="/register" className="btn btn-hero">login/register</Link>
                    </div>
                    <img src={main} alt="main hero" />
                </div>
            </main>
        </Wrapper>
    )
};

export default Landing;
