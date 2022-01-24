import './style.scss';
import './responsive.scss';
import cvLogo from '../img/hexagon.png';
import PhoneIcon from '../../../../../Reusable/Icons/Phone';
import LetterIcon from '../../../../../Reusable/Icons/Letter';
import LinkedinIcon from '../../../../../Reusable/Icons/LinkedIn';
import GitHubIcon from '../../../../../Reusable/Icons/GitHub';
import { Col, Row,ProgressBar } from 'react-bootstrap';
const CvComponent = () => {
    return (
        <div className="p-2 cv-cont">
            <div className="cv-box p-3">
                <Row>
                    <Col md={4}>
                        <div className="left-box p-3">
                            <div className="cv-name-logo-cont mx-auto mb-4">
                                <img src={cvLogo} alt='about-me' />
                            </div>
                            <div className="cv-brief-info-cont mb-4 cv-contacts">
                                <h4 className="cv-title text-uppercase mb-3">Contact</h4>
                                <div>
                                    <p><PhoneIcon /> +374 98 729 160</p>
                                    <p><LetterIcon /> tatevtahmazyan200216@gmail.com</p>
                                    <p><GitHubIcon /> <a href='https://github.com/tatev-tahmazyan' rel="noreferrer" target="_blank">github.com/tatev-tahmazyan</a></p>
                                    <p><LinkedinIcon /> <a href='https://www.linkedin.com/in/tatev-tahmazyan-2aa5b7219' rel="noreferrer" target="_blank">linkedin.com/in/tatev-tahmazyan</a></p>
                                </div>
                            </div>
                            <hr/>
                            <div className="cv-brief-info-cont mb-4 cv-education">
                                <h4 className="cv-title text-uppercase mb-3">Education</h4>
                                <div>
                                    <div className="mb-3">
                                        <p>Web full stack</p>
                                        <span>Tco trainings</span><br/>
                                        <span>07.2021-01.2022</span>
                                    </div>
                                    <div>
                                        <p>Software technician</p>
                                        <span>Yerevan State College of Informatics</span><br/>
                                        <span>2017-2021</span>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className="cv-brief-info-cont cv-practice mb-4">
                                <h4 className="cv-title text-uppercase mb-3">Educational practice</h4>
                                <div>
                                    <div className="mb-3">
                                        <p>Masys Information Systems</p>
                                        <span>12.2020-04.2021</span>
                                    </div>
                                    <div>
                                        <p>Synergy International Systems</p>
                                        <span>09.2020-01.2021</span>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className="cv-brief-info-cont cv-skills">
                                <h4 className="cv-title text-uppercase mb-3">Key Skills</h4>
                                <div>
                                    <p>HTML, CSS(SCSS), JavaScript(jQuery)</p>
                                    <p>PHP(Laravel)</p>
                                    <p>SQL Databases</p>
                                </div>
                            </div>

                        </div>
                    </Col>
                    <Col md={8}>
                        <div className="right-box p-3 ">
                            <div className="cv-name-lname-cont text-uppercase mt-4 mb-5">
                                <h2 className="mb-3">Tatev Tahmazyan</h2>
                                <h6>Junior Full stack web developer</h6>
                            </div>
                            <hr/>
                            <div className="cv-brief-about-me mt-5 mb-3">
                                <h4 className="cv-title text-uppercase mb-3">About me</h4>
                                <p className='pb-3'>I enjoy turning complex problems into simple, beautiful and intuitive projects.
                                    I've always sought out opportunities and challenges that are meaningful to me.
                                    As a developer, I enjoy using my attention to detail, and my mission-driven work
                                    ethic. Seeking to further improve my skills.
                                </p>
                            </div>
                            <hr/>

                            <div className="cv-long-skills mt-3 mb-3">
                                <h4 className="cv-title text-uppercase mb-4">My skills</h4>
                                <ProgressBar className='mb-3' variant="info" now={90} label="HTML"/>
                                <ProgressBar className='mb-3' variant="info" now={80} label="CSS"/>
                                <ProgressBar className='mb-3' variant="info" now={60} label="SCSS"/>
                                <ProgressBar className='mb-3' variant="info" now={60} label="JavaScript" />
                                <ProgressBar className='mb-3' variant="info" now={60} label="jQuery" />
                                <ProgressBar className='mb-3' variant="info" now={30} label="React"/>
                                <ProgressBar className='mb-3' variant="info" now={60} label="PHP" />
                                <ProgressBar className='mb-3' variant="info" now={40} label="Laravel"/>
                                <ProgressBar className='mb-3' variant="info" now={60} label="SQL"/>
                                <ProgressBar className='mb-3' variant="info" now={20} label="C++"/>
                                <ProgressBar className='mb-3' variant="info" now={40} label="Adobe Photoshop"/>
                                <ProgressBar className='mb-3' variant="info" now={30} label="CorelDRAW"/>
                            </div>

                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
export default CvComponent;