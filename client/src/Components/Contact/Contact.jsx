import React from "react";
import "./Contact.css";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const initData = {
    name: "",
    email: "",
    phone: "",
  };

  const [formdata, setFormdata] = useState(initData);

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const baseURL = "/contactus";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(baseURL, formdata).then((response) => {
        window.alert("Your Contact has been collected we will contact shortly");
      });
    } catch {}
  };
  return (
    <div className="Contact__wrap">
      <div className="Contact">
        <h1>Start your 15 days free trial now!</h1>
        <form onSubmit={handleSubmit}>
          <div className="Contact__inputs">
            <div className="Contact__input">
              Name :
              <input type="text" name="name" onChange={handleChange} required/>
            </div>

            <div className="Contact__input">
              Phone :
              <input type="text" name="phone" onChange={handleChange} pattern = "^[6-9]\d{9}$" title="Invalid phone number" required/>
            </div>

            <div className="Contact__input">
              Email :
              <input type="text" name="email" onChange={handleChange} pattern="[^@\s]+@[^@\s]+" title="Invalid email address" required />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
