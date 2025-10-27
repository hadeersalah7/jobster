import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import styled from "styled-components";
const Landing = () => {
    return <main>
        <nav>
            <img src={logo} alt="nav logo"/>
        </nav>
        <div className="container page">
            {/* Info */}
            <div className="info">
                <h1>job <span>tracking</span> app</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam placeat accusamus atque animi! Corrupti excepturi iste nihil adipisci debitis voluptatibus enim, culpa repellendus minima. Debitis quos eveniet animi obcaecati necessitatibus.</p>
                <button className="btn btn-hero">login/register</button>
            </div>
            <img src={main} alt="main hero"/>
        </div>
  </main>;
};

export default Landing;
