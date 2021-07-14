import React from 'react';
import aboutImg from "../../images/about.png";
import { Link } from "react-router-dom";
import "./about.scss";
import { HiOutlineDocumentDownload } from 'react-icons/hi';

export default function Index() {
    const scrollToTop = (e) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <section className="deneb_about about_v1" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="deneb_img_box wow fadeInLeft">
                            <img src={aboutImg} className="img-fluid" alt="about"/>
						</div>
                    </div>
                    <div className="col-lg-7">
                        <div className="deneb_content_box wow fadeInRight">
                            <h2>About Me</h2>
                            <p>I am a <code>Full-stack Software Developer</code>, with over {new Date().getFullYear()- 2018} years of professional experience in Web Development. <code>Experienced</code> with all stages of the development cycle for dynamic web projects.</p>
                            <p>I have been working with web development since 2016, the period during which I have worked in different environments, from big consultancy companies to start-ups. I am a self-motivated and self-taught professional who likes to solve problems.</p>
                            <p>I merge a passion for usability and user experience with technical knowledge to create cool digital experiences. My repertoire includes programming languages and tools such as listed below in the techonologies section.</p>
                            <p>I love computers and technology in general, more to what i do is teach computer programming and coach beginners in software development.</p>
                            <Link to="about" onClick={scrollToTop} className="deneb_btn"><i><HiOutlineDocumentDownload size="2rem"/></i> Resume</Link>
                        </div>
                    </div>
                </div>
            </div>
		</section>
    )
}
