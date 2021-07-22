import React, {useEffect, useState} from 'react';
import "./portfolios.scss";
import shapeImg_01 from "../../images/shape/shape_10.png";
import { Tabs, Tab } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PortfolioItem from "../../SingleFeatures/portfolio_item";
import SectionTitle from "../section_title";

const api = 'https://calm-springs-01731.herokuapp.com/api'

export default function Index() {
    const [projects, setProjects] = useState([]);
    console.log(projects);

    useEffect(() => {
        fetch(`${api}/projects`)
        .then(response => response.json())
        .then(projects => setProjects(projects))
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerPadding: "30px"
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className="deneb_project project_v1" id="portfolio">
            <div className="shape_v3">
                <img src={shapeImg_01} className="shape_10" alt="shape"/>
            </div>
            <div className="container">
                <SectionTitle 
                    title="Projects"
                    // description=" When unknow printer took a gallery of type and scramblted it to makea type specimen book"
                />
                <div className="row">
                    <div className="col-lg-12 carousel-style projects_slider_content">
                        <Tabs defaultActiveKey="development" id="portfolio-tabs">
                            <Tab eventKey="development" title="" className="project_btn active_btn">
                                <div className="mt-5">
                                    <Slider {...settings}>
                                        {projects.map((project, i) => (
                                            <div>
                                                <PortfolioItem
                                                    key={i}
                                                    img={`${api}/projects/${project.slug}/photo`}
                                                    title={project.title}
                                                    url={project.url}
                                                    description={project.description}
                                                    tag={project.tags.map((tag) => `#${tag} `)}
                                                />
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )
}
