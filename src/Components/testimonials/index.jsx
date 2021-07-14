import React from 'react';
import shape_img_12 from "../../images/shape/shape_12.png";
import shape_img_13 from "../../images/shape/shape_13.png";
import people_img_01 from "../../images/1.png";
import people_img_02 from "../../images/2.png";
import people_img_03 from "../../images/3.png";
import people_img_04 from "../../images/4.png";
import people_img_05 from "../../images/5.png";
import people_img_06 from "../../images/6.png";
import people_img_07 from "../../images/7.png";
import testimonial_img_01 from "../../images/testimonial_1.jpg";
import testimonial_img_02 from "../../images/testimonial_2.jpg";
import testimonial_img_03 from "../../images/testimonial_3.jpg";
import "slick-carousel/slick/slick.css";
import "./testimonials.scss";
import SectionTitle from "../section_title";
import TestimonialItem from "../../SingleFeatures/testimonial_item";
import Slider from "react-slick";

export default function Index() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <section className="deneb_testimonial testimonial_v1">
            <div className="shape_v5">
                <img src={shape_img_12} className="shape_12" alt="shape" />
                <img src={shape_img_13} className="shape_13" alt="shape" />
            </div>
            <div className="container">
                <SectionTitle
                    title="What Clients Say"
                    // description="When unknow printer took a gallery of type and scramblted it to make a type specimen book"
                />
                <div className="row1">
                    <div className="single_img">
                        <img src={people_img_01} className="img-fluid" alt="people" />
                    </div>
                    <div className="single_img sm_img">
                        <img src={people_img_02} className="img-fluid" alt="people" />
                    </div>
                    <div className="single_img sm_img">
                        <img src={people_img_03} className="img-fluid" alt="prople" />
                    </div>
                </div>
                <div className="row2">
                    <div className="single_img">
                        <img src={people_img_04} className="img-fluid" alt="prople" />
                    </div>
                    <div className="single_img sm_img">
                        <img src={people_img_05} className="img-fluid" alt="prople" />
                    </div>
                    <div className="single_img sm_img">
                        <img src={people_img_06} className="img-fluid" alt="people" />
                    </div>
                    <div className="single_img">
                        <img src={people_img_07} className="img-fluid" alt="people" />
                    </div>
                </div>
                <div className="testimonial_slide carousel-style">
                    <Slider {...settings}> 
                        <TestimonialItem
                            img={testimonial_img_01}
                            name="Chinedum Akwara"
                            designation="Manager, LSP"
                            text="We at LSP are very impressed with the all 
                            aspects of our new website. We would highly reccomend Mcjovial 
                            to anyone looking to build a new website."

                        />
                        <TestimonialItem
                            img={testimonial_img_02}
                            name="Riv Johnson"
                            designation="Web Developer"
                            text="The attention to detail with Jovi's professionalism is incredible. 
                            You have proven to be very innovative and will work with ideas that 
                            I have as well and think of new ways to bring more traffic to our site in ways I would never have considered."

                        />
                        <TestimonialItem
                            img={testimonial_img_03}
                            name="Celesto Anderson"
                            designation="Manager"
                            text="Mcjovial listened to everything we needed and wanted in a 
                            new website, then delivered it! Our new website is fun, exciting 
                            and easy to use for me and our audiences. I have gone through 
                            website redesigns before, and by far, this one was the easiest 
                            and least painful. I was listened to and respected through every 
                            step. We couldn’t be happier with our new website."

                        />
                        <TestimonialItem
                            name="Agatha"
                            designation="Founder, YDDI"
                            text="YDDI started working with McJovial during the spring 
                            of 2019. After a few short weeks, he provided us with various 
                            options to meet our needs.  We now have a renovated, exciting 
                            website providing excellent information for our society."
                        />
                    </Slider>
                </div>
            </div>
        </section>

    )
}
