import React from 'react';
import icon_07 from "../../images/icon_7.png";
import icon_08 from "../../images/icon_8.png";
import icon_09 from "../../images/icon_9.png";
import icon_10 from "../../images/icon_10.png";
import "./projects_info.scss";
import SectionTitle from "../section_title";
import { FaLaravel, FaNodeJs, FaPython, FaReact, FaVuejs } from 'react-icons/fa';
import { DiAws, DiDocker, DiGit, DiJava, DiJavascript1, DiMongodb, DiPhp } from 'react-icons/di';
import { SiBootstrap, SiDjango, SiMaterialUi, SiMysql, SiNextDotJs } from 'react-icons/si';
import { FcLinux } from 'react-icons/fc';


export default function Index() {
    return (
        <section className="deneb_achivement section_padding">
            <SectionTitle
                title="Technologies"
                // description="When unknow printer took a gallery of type and scramblted it to makea type specimen book"
            />

            <div className="container">
                <div className=" align-items-center">    
                    <div className="col-lg-12">
                        <div className="row achivment_wrapper">
                            <div className="single_achivment wow fadeInUp">
                                <div className="icon">
                                    <i><FaReact size="4rem"/></i>
                                    <p><small>React.Js</small></p>
                                </div>
                            </div>
                            <div className="single_achivment wow fadeInUp" data-wow-delay=".1s">
                                <div className="icon">
                                    <i><FaVuejs size="4rem"/></i>
                                    <p><small>Vue.js</small></p>
                                </div>
                            </div>
                            <div className="single_achivment wow fadeInUp" data-wow-delay=".2s">
                                <div className="icon">
                                    <i><FaNodeJs size="4rem"/></i>
                                    <p><small>Node.js</small></p>
                                </div>
                            </div>
                            <div className="single_achivment wow fadeInUp" data-wow-delay=".3s">
                                <div className="icon">
                                    <i><DiJavascript1 size="4rem"/></i>
                                    <p><small>Javascript</small></p>
                                </div>
                            </div>

                            <div className="single_achivment wow fadeInUp" data-wow-delay=".1s">
                                <div className="icon">
                                    <i><DiPhp size="4rem"/></i>
                                </div>
                                {/* <p>php</p> */}
                            </div>
                            <div className="single_achivment wow fadeInUp" data-wow-delay=".2s">
                                <div className="icon">
                                    <i><FaLaravel size="4rem"/></i>
                                    <p><small>Laravel</small></p>
                                </div>
                            </div>
                            <div className="single_achivment wow fadeInUp" data-wow-delay=".3s">
                                <div className="icon">
                                    <i><FaPython size="4rem"/></i>
                                    <p><small>Python</small></p>
                                </div>
                            </div>
                            <div className="single_achivment wow fadeInUp" data-wow-delay=".1s">
                                <div className="icon">
                                    <i><SiDjango size="4rem"/></i>
                                    <p><small>Django</small></p>
                                </div>
                            </div>
                            <div className="single_achivment wow fadeInUp" data-wow-delay=".2s">
                                <div className="icon">
                                    <i><DiMongodb size="4rem"/></i>
                                    <p><small>MongoDb</small></p>
                                </div>
                            </div>
                            <div className="single_achivment wow fadeInUp" data-wow-delay=".3s">
                                <div className="icon">
                                    <i><SiMysql size="4rem"/></i>
                                </div>
                                {/* <p>MySQL</p> */}
                            </div>
                            <div className="single_achivment wow fadeInUp" data-wow-delay=".1s">
                                <div className="icon">
                                    <i><FcLinux size="4rem"/></i>
                                    <p><small>Sys Admin</small></p>
                                </div>
                            </div>
                            <div className="single_achivment wow fadeInUp" data-wow-delay=".2s">
                                <div className="icon">
                                    <i><DiDocker size="4rem"/></i>
                                    <p><small>Docker</small></p>
                                </div>
                            </div>
                            <div className="single_achivment wow fadeInUp" data-wow-delay=".2s">
                                <div className="icon">
                                    <i><SiNextDotJs size="4rem"/></i>
                                    <p><small>Next.js</small></p>
                                </div>
                            </div>
                            <div className="single_achivment wow fadeInUp" data-wow-delay=".3s">
                                <div className="icon">
                                    <i><SiBootstrap size="4rem"/></i>
                                    <p><small>Bootstrap</small></p>
                                </div>
                            </div>
                            <div className="single_achivment wow fadeInUp" data-wow-delay=".1s">
                                <div className="icon">
                                    <i><SiMaterialUi size="4rem"/></i>
                                    <p><small>Material UI</small></p>
                                </div>
                            </div>
                            <div className="single_achivment wow fadeInUp" data-wow-delay=".2s">
                                <div className="icon">
                                    <i><DiGit size="4rem"/></i>
                                    <p><small>Git</small></p>
                                </div>
                            </div>
                            <div className="single_achivment wow fadeInUp" data-wow-delay=".2s">
                                <div className="icon">
                                    <i><DiJava size="4rem"/></i>
                                    <p><small>Java</small></p>
                                </div>
                            </div>
                            <div className="single_achivment wow fadeInUp" data-wow-delay=".2s">
                                <div className="icon">
                                    <i><DiAws size="4rem"/></i>
                                    <p><small>AWS</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
