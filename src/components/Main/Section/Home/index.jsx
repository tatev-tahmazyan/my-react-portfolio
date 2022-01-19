import { Link } from "react-router-dom";
import './style.scss';

const Home = () => {
    return (
        <div className="project-home-page d-flex flex-column justify-content-center align-items-center">
            <div>
                <div className="shooting"></div>
                <div className="shooting"></div>
                <div className="shooting"></div>
                <div className="shooting"></div>
                <div className="shooting"></div>
                <div className="shooting"></div>
                <div className="shooting"></div>
                <div className="shooting"></div>
            </div>
            <div className="home-page-content text-center">
                <h2 className="mb-5 typing-text ">
                    Hello, I'm <span>Tatev Tahmazyan</span>, 
                    I'm a junior full stack web developer.
                </h2>
                
                <Link to='/portfolio' className="link-portfolio pt-2 pb-2 pr-3 pl-3">View my work</Link>
                
            </div>
            
        </div>
    );
}
export default Home;