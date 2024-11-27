import React from 'react';
import './contact.css';

const ContactForm = () => {
  return (
    <div className="container" id = "contact-form">
        <h2>Contact Us</h2>
      <div className="contact__wrapper shadow-lg mt-n9">
        <div className="contact-content">
          <img
            src="https://images.pexels.com/photos/3810792/pexels-photo-3810792.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Contact"
            className="contact-image"
          />

          <div className="col-lg-7 contact-form__wrapper p-5 order-lg-1">
            <form action="#" className="contact-form form-validate" noValidate="novalidate">
              <div className="row">
                <div className="col-sm-6 mb-3">
                  <div className="form-group">
                    <label className="required-field" htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      placeholder="Wendy"
                    />
                  </div>
                </div>

                <div className="col-sm-6 mb-3">
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      placeholder="Appleseed"
                    />
                  </div>
                </div>

                <div className="col-sm-6 mb-3">
                  <div className="form-group">
                    <label className="required-field" htmlFor="email">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="wendy.apple@seed.com"
                    />
                  </div>
                </div>

                <div className="col-sm-6 mb-3">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      placeholder="(021)-454-545"
                    />
                  </div>
                </div>

                <div className="col-sm-12 mb-3">
                  <div className="form-group">
                    <label className="required-field" htmlFor="message">How can we help?</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Hi there, I would like to....."
                    />
                  </div>
                </div>

                <div className="col-sm-12 mb-3">
                  <button type="submit" name="submit" className="btn btn-primary">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
