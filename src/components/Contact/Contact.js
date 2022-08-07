import React from "react";
import './Contact.css';

const Contact = props => {

    return (
      <div className="Contact mt-5">
        <ul className="contact-details">
          <li>Nitin Dwivedi</li>
          <li>Email: <a href="mailto:atelierdesign00@gmail.com">nitindwivedi4all@gmail.com</a></li>
          <li>Phone: +91 73834 62564</li>
          <li>Location: Gujarat, India</li>
        </ul>
      </div>
    );
};

export default Contact;
