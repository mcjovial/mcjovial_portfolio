import React from 'react';
import CallToAction from "../call_to_action";
import footerImg from "../../images/footer_bg.png";
import logoImg from "../../images/logo_1.png";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaGithub,
    FaLinkedin,
    FaSlackHash
} from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";
import "./footer.scss";

export default function Index() {
    const scrollToTop = (e)=> {
        scroll.scrollToTop();
    }
    return (
	  <>
        <CallToAction/>
        <footer className="deneb_footer">
                <div className="widget_wrapper" style={{ backgroundImage: `url(${footerImg})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="widget widegt_about">
                                <div className="widget_title">
                                    <Link style={{ cursor: 'pointer' }} smooth={true} duration={500} to="home" onClick={scrollToTop}><img src={logoImg} className="img-fluid" alt="logo" /></Link>
								</div>
                                    <p>I am a <code>Full-stack Software Developer</code>, with over {new Date().getFullYear()- 2018} years of professional experience in Web Development. <code>Experienced</code> with all stages of the development cycle for dynamic web projects.</p>
                                    <ul className="social">
                                        <li><a href="#"><i><FaFacebookF/></i></a></li>
                                        <li><a href="#"><i><FaTwitter/></i></a></li>
                                        <li><a href="#"><i><FaInstagram/></i></a></li>
                                        <li><a href="#"><i><FaGithub/></i></a></li>
                                        <li><a href="#"><i><FaSlackHash/></i></a></li>
                                        <li><a href="#"><i><FaLinkedin/></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="widget widget_link">
                                    <div className="widget_title">
                                        <h4>Links</h4>
                                    </div>
                                    <ul>
                                        <li><Link to="about" style={{ cursor: 'pointer' }} offset={-70} smooth={true} duration={500}>About</Link></li>
                                        <li><Link to="services" style={{ cursor: 'pointer' }} smooth={true} duration={500}>Services</Link></li>
                                        <li><Link to="portfolio" style={{ cursor: 'pointer' }} offset={-70} smooth={true} duration={500}>Portfolio</Link></li>
                                        <li><Link to="contact" style={{ cursor: 'pointer' }} offset={-70} smooth={true} duration={500}>Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="widget widget_contact">
                                    <div className="widget_title">
                                        <h4>Contact Me</h4>
                                    </div>
                                    <div className="contact_info">
                                        <div className="single_info">
                                            <div className="icon">
                                                <i><FaPhoneAlt/></i>
                                            </div>
                                            <div className="info">
                                                <p><a href="tel:+2349038821990">+234-903-882-1990</a></p>
                                            </div>
                                        </div>
                                        <div className="single_info">
                                            <div className="icon">
                                                <i><FaEnvelope/></i>
                                            </div>
                                            <div className="info">
                                                <p><a href="mailto:info@mcjovial.dev">info@mcjovial.dev</a></p>
                                            </div>
                                        </div>
                                        <div className="single_info">
                                            <div className="icon">
                                                <i><FaMapMarkerAlt/></i>
                                            </div>
                                            <div className="info">
                                                <p>Roar Nigeria Hub, UNN <span>Nigeria</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright_area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="copyright_text">
                                    <p>Copyright &copy; {new Date().getFullYear()} <span>McJovial</span>. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
		</footer>
     </>
            
    )
}
