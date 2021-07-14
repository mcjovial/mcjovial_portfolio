import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Slider from "react-slick";
import "./hero_area.scss";
import shapeImg from "../../images/shape/shape_1.png";
import SliderItem from "../../SingleFeatures/slider_item";
import slider_01_img from "../../images/banner_1.png";
import slider_02_img from "../../images/banner_02.png";
import slider_03_img from "../../images/banner_03.png";

export default function Index() {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <section className="deneb_banner carousel-style banner_v1" id="home">
            <div className="shape_v1">
                <img src={shapeImg} className="shape_1" alt="shape" />
            </div>
            <div className="container">
                <div className="hero_slider">
                   <Slider {...settings}> 
                        <SliderItem
                            title="Here, I am "
                            sub_title="Elias Emmanuel Atyusan"
                            heading="I do business transformations"
                            description="I help medium to large businesses boost their online sales through the &lt;code&gt;Design, Development, Maintenance and Promotion of their websites&lt;/code&gt;"
                            url="contact"
                            img={slider_01_img}
                        />
                    </Slider>
                </div>
            </div>
        </section>

    )
}
