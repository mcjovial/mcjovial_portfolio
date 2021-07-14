import React, {useState} from 'react';
import "./header.scss";
import siteLogo from "../../images/logo_1.png";
import { NavLink } from "react-router-dom";
import { FaTimes} from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Index() {

    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

    const controlMobileMenu = (e) =>{
        setToggleMobileMenu(!toggleMobileMenu);
    }
    const closeMenu = (e) =>{
        setToggleMobileMenu(false);
    }

    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    
    return (
        <>
            <header className="header_area header_v1 transparent_header">
                <div className="container">
                    <div className="site_menu">
                        <div className="row align-items-center">
                            <div className="col-lg-2">
                                <div className="brand">
                                    <Link Link style={{ cursor: 'pointer' }} spy={true} smooth={true} duration={500} className="logo" onClick={scrollToTop} to="/"><img src={siteLogo} className="img-fluid" alt="logo" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-10">
                                <div className="primary_menu" id="menu">
                                    <nav className="main_menu">
                                        <ul>
                                            <li className="menu-item"><Link style={{ cursor: 'pointer' }} spy={true} smooth={true} duration={500} activeClass="active_link" to="home">Home</Link></li>
                                            <li className="menu-item"><Link style={{ cursor: 'pointer' }} spy={true} smooth={true} duration={500} activeClass="active_link" to="services">My Services</Link></li>
                                            <li className="menu-item"><Link style={{ cursor: 'pointer' }} spy={true} smooth={true} offset={-70} duration={500} activeClass="active_link" to="about">About Me</Link></li>
                                            <li className="menu-item"><Link style={{ cursor: 'pointer' }} spy={true} smooth={true} offset={-70} duration={500} activeClass="active_link" to="portfolio">My Portfolio</Link></li>
                                            <li className="menu-item"><Link style={{ cursor: 'pointer' }} spy={true} smooth={true} offset={-80} duration={500} activeClass="active_link" to="contact">Contact Me</Link></li>
                                            <li className="menu-item"><Link style={{ cursor: 'pointer' }} spy={true} smooth={true} offset={-80} duration={500} className="deneb_btn" to="contact">Hire Me</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mobile_wrapper">
                        <div className="mobile_header">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <div className="brand_logo">
                                    <Link Link style={{ cursor: 'pointer' }} spy={true} smooth={true} duration={500} className="logo" onClick={scrollToTop} to="/"><img src={siteLogo} className="img-fluid" alt="logo" /></Link>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="menu_button">
                                        <div className={toggleMobileMenu ? "menu_icon active" : "menu_icon"} onClick={controlMobileMenu}>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={toggleMobileMenu ? "sidenav_menu active" : "sidenav_menu"}>
                            <ul className="sidebar-menu">
                                <li className="menu-item"><Link style={{ cursor: 'pointer' }} spy={true} smooth={true} duration={500} activeClass="active_link" to="home">Home</Link></li>
                                <li className="menu-item"><Link style={{ cursor: 'pointer' }} spy={true} smooth={true} duration={500} activeClass="active_link" to="services">My Services</Link></li>
                                <li className="menu-item"><Link style={{ cursor: 'pointer' }} spy={true} smooth={true} offset={-70} duration={500} activeClass="active_link" to="about">About Me</Link></li>
                                <li className="menu-item"><Link style={{ cursor: 'pointer' }} spy={true} smooth={true} offset={-70} duration={500} activeClass="active_link" to="portfolio">My Portfolio</Link></li>
                                <li className="menu-item"><Link style={{ cursor: 'pointer' }} spy={true} smooth={true} offset={-80} duration={500} activeClass="active_link" to="contact">Contact Me</Link></li>
                                <li className="menu-item"><Link style={{ cursor: 'pointer' }} spy={true} smooth={true} offset={-80} duration={500} className="deneb_btn" to="contact">Hire Me</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
