import React from 'react';
import contactImg from "../../images/contact.png";
import { Field, Form, Formik, FormikProps } from 'formik';
import { FaRegGrinHearts } from 'react-icons/fa';
import "./contact.scss";
import emailjs from 'emailjs-com';

export default function Index() {
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const USER_ID = process.env.REACT_APP_USER_ID;
    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents default refresh by the browser
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
                alert("Message Sent, I will get back to you shortly", result.text);
            }, (error) => {
                alert("An error occurred, Please try again", error.text);
            });
    };
    return (
        <section className="deneb_contact contact_v1" id="contact">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="deneb_img_box">
                            <img src={contactImg} className="img-fluid" alt="contact" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="section_title">
                            <h2>Contact Me</h2>
                            <p>
                                Get in touch with me, I'm just a message away <i><FaRegGrinHearts size="1.5rem" style={{color: 'orangered'}}/></i>
                            </p>
                        </div>
                        <div className="contact_form">
                            <Formik
                                initialValues={{ 
                                  name: '', 
                                  subject: '', 
                                  email: '', 
                                  phone: '',
                                  message: ''
                                 }}
                                onSubmit={(values, actions) => {
                                    setTimeout(() => {
                                        alert(JSON.stringify(values, null, 2));
                                        actions.setSubmitting(false);
                                    }, 1000);
                                }}
                            >
                                {() => (
                                    <Form onSubmit={handleSubmit}>
                                       <div className="row">
                                           <div className="col-lg-12">
                                               <div className="form_group">
                                                   <Field
                                                     type="text"
                                                     name="name"
                                                     className="form_control"
                                                     placeholder="Full name"
                                                     required
                                                   />
                                               </div>
                                           </div>
                                           <div className="col-lg-6">
                                               <div className="form_group">
                                                   <Field
                                                     type="email"
                                                     name="email"
                                                     className="form_control"
                                                     placeholder="Email Address"
                                                     required
                                                   />
                                               </div>
                                           </div>
                                           <div className="col-lg-6">
                                               <div className="form_group">
                                                   <Field
                                                     type="number"
                                                     name="phone"
                                                     className="form_control"
                                                     placeholder="Phone No"
                                                     required
                                                   />
                                               </div>
                                           </div>
                                           <div className="col-lg-12">
                                               <div className="form_group">
                                                   <Field
                                                     type="text"
                                                     name="subject"
                                                     className="form_control"
                                                     placeholder="Subject"
                                                     required
                                                   />
                                               </div>
                                           </div>
                                           <div className="col-lg-12">
                                               <div className="form_group">
                                                   <Field
                                                     as="textarea"
                                                     name="message"
                                                     className="form_control"
                                                     placeholder="Message"
                                                     required
                                                   />
                                               </div>
                                           </div>
                                            <div className="col-lg-12">
                                                <div className="button_box">
                                                    <button className="deneb_btn">Send</button>
                                                </div>
                                            </div>
                                       </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
