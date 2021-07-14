import React from 'react';
import aboutImg from "../../images/about.png";
import awardImg from "../../images/award.png";
import signImg from "../../images/sign_2.png";

export default function HireUs() {
    return (
        <section className="deneb_about about_v2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="deneb_img_box">
                            <img src={aboutImg} className="img-fluid" alt="about"/>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="deneb_content_box">
                            <h2>Why You Hire Us?</h2>
                            <p>Proin ipsum arcu, lobortis id ullamcorper nec, vehicula eget magna. Sed ut malesuada magna, eget lacinia sapien. Nam molestie non ex sit amet ornare. Nunc in pellentesque ipsum, vel vulputate sapien.</p>
                            <p>
                                Suspendisse potenti. Aliquam elementum felis purus, quis vulputate libero semper nec. Morbi tincidunt maximus nisl vel placerat. Curabitur at ligula ac diam elementum hendrerit. Suspendisse nec metus eu est laoreet
                                hendrerit vitae non ipsum. Nam faucibus elementum arcu, eget eleifend tortor.
                            </p>
                        </div>
                        <div className="award_box">
                            <div className="award_img">
                                <img src={awardImg} alt="award"/>
                            </div>
                            <div className="award_info">
                                <img src={signImg} className="img-fluid" alt="signin"/>
                                <h4>Deneb Team</h4>
                                <h5>Best Award 2020</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
