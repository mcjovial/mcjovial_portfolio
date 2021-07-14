import React from 'react';
import "./call_to_action.scss";
import { Link } from "react-scroll";
export default function Index() {

    const scrollPageTop = (e) =>{
        window.scrollTo({top:400, behavior: "smooth"});
    }
    return (
        <section className="deneb_cta">
            <div className="container">
                <div className="cta_wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="cta_content">
                                <h3>Have Any Project in Mind ?</h3>
                                <p>I am suitable for the Job, I create web apps that work. I have skills that makes me able to work alone or with teams. If you have any questions please feel free to contact me.</p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="button_box">
                                <Link className="deneb_btn" style={{ cursor: 'pointer' }} offset={-70} smooth={true} duration={500} to="contact">Hire Me</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
