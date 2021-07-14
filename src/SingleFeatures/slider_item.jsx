import React from 'react';
import { Link } from "react-scroll";

export default function SliderItem(props) {
    const { title, sub_title, heading, description, img, url } = props;
    return (
        <div className="signle_slider">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <div className="banner_content wow fadeInLeft">
                        <h1>{title}<br /><span>{sub_title}</span></h1>
                        <h5>{heading}</h5>
                        <p>I help medium to large businesses boost their online sales through the <code>Design, Development, Maintenance and Promotion of their websites</code></p>
                        <Link style={{ cursor: 'pointer' }} spy={true} smooth={true} offset={-80} duration={500} to={url} className="deneb_btn">Hire Me</Link>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="deneb_img_box wow fadeInRight">
                        <img
                            src={img}
                            className="img-fluid"
                            alt={title}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
