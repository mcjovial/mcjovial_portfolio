import React from 'react';
import "./services.scss";
import ServiceItem from "../../SingleFeatures/service_item";
import SectionTitle from "../section_title";
import serviceIcon_01 from "../../images/icon_1.png";
import serviceIcon_02 from "../../images/icon_2.png";
import serviceIcon_03 from "../../images/icon_3.png";

export default function Index() {
    return (
        <section className="deneb_service service_v1" id="services">
            <div className="shape_v2">
                <img src="assets/images/shape/shape_7.png" className="shape_7" alt="" />
            </div>
            <div className="container">
                <SectionTitle
                    title="My Services"
                    // description="When unknow printer took a gallery of type and scramblted it to makea type specimen book"
                />
                <div className="row">
                    <ServiceItem 
                      icon={serviceIcon_01}
                      title="Web Solutions"
                      url="#"
                      description="My years of experience produce a constellation of great work. And as the web evolves, my approach also improves in order to produce secure web apps and stay updated with digital trends so as to boost branding & digital marketing results for businesses."
                    />
                    <ServiceItem
                        icon={serviceIcon_02}
                        title="Strategy & Research"
                        url="#"
                        description="My mission is your business' unique journey. Society increasingly expects businesses to help solve problems of environmental degradation, inequality, and poverty. With some little help your business can restrategise and meet society's demand."
                    />
                    <ServiceItem
                        icon={serviceIcon_03}
                        title="Software Development"
                        url="#"
                        description="In my years of experience in software development I have adopted a development process that goes from: Planning -> Design -> Building -> Testing -> Deployment -> Maintenance in order to produce reliable & scalable software products"
                    />
                </div>
            </div>
        </section>                 
    )
}
