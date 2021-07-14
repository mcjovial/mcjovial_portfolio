import React from 'react';
import skillImg from "../../images/skill.png";

export default function Skills() {
    return (
        <section className="deneb_skill">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="section_title">
                            <h2>Let Know Our Expert Skills</h2>
                            <p>Curabitur libero eros, efficitur sit amet sodales tincidunt, aliquet et leo. Sed ut nibh feugiat, auctor enim quis, hendrerit ipsum. Aenean blandit lacinia suscipit. Nunc ut tincidunt massa, eu semper lacus.</p>
                        </div>
                        <div className="skill_wrapper">
                            <div className="single_bar">
                                <div className="progress_title">
                                    <h5>UI/UX Design<span>85%</span></h5>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar wow slideInLeft" style={{width: "85%"}}><div className="dot"></div></div>
                                </div>
                            </div>
                            <div className="single_bar">
                                <div className="progress_title">
                                    <h5>Web Design<span>75%</span></h5>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar wow slideInLeft" style={{ width: "75%" }}><div className="dot"></div></div>
                                </div>
                            </div>
                            <div className="single_bar">
                                <div className="progress_title">
                                    <h5>HTML/CSS<span>90%</span></h5>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar wow slideInLeft" style={{ width: "90%" }}><div className="dot"></div></div>
                                </div>
                            </div>
                            <div className="single_bar">
                                <div className="progress_title">
                                    <h5>Sketch<span>65%</span></h5>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar wow slideInLeft" style={{ width: "65%" }}><div className="dot"></div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="deneb_img_box">
                            <img src={skillImg} className="img-fluid" alt="skill" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
