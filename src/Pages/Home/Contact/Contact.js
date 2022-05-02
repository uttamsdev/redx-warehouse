import React from "react";
import "./Contact.css";

const Contact = () => {
  const map =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13828.69184583748!2d-90.08166771880984!3d29.94570320382167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620a5de92c73877%3A0xa360b21dcb828b9f!2sWarehouse%20District%2C%20New%20Orleans%2C%20LA%2C%20USA!5e0!3m2!1sen!2sbd!4v1651468085380!5m2!1sen!2sbd";
  return (
    <div className="contact-container">
      <div>
        <h5>HOW TO FIND US</h5>
        <h1>Contacts</h1>
        <div className="contact-area">
          <div className="hr">
          </div>
          <div className="map">
            <iframe src={map}></iframe>
          </div>
          <div>
            <p>
              Race Event BeFaster, UK, <br></br>2292 Peachtree Rd NW
            </p>
            <p>hello@redrockepic.com</p>
            <p>
              +1 800 787 7012 <br />
              +1 800 785 7023
            </p>
            <p>facebook.com/redrockxcm</p>
            <p>twitter.com/redrockepic</p>
            <p>instagram.com/redrockxcm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
