import "./style.css";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { toast } from "react-toastify";

const ContactMe = () => {
  const form = useRef();
  const [userObj, setUserObj] = useState({
    user_name: "",
    user_email: "",
    user_msg: "",
  });

  const handleChange = (e) => {
    const label = e.target.name;
    const val = e.target.value;
    setUserObj({ ...userObj, [label]: val });
  };

  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!userObj.user_name || !userObj.user_email || !userObj.user_msg) {
      toast.error("All fields are required!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (!validateEmail(userObj.user_email)) {
      toast.error("Please Enter Valid Email!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      setUserObj({
        user_name: "",
        user_email: "",
        user_msg: "",
      });

      emailjs
        .sendForm("service_4a6s4nx", "template_m6cm7sa", form.current, {
          publicKey: "HYbXCHVejgnk4EiM0",
        })
        .then(
          (res) => {
            if (res.status === 200) {
              toast.success("Email Send Successfully", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            }
          },
          (error) => {
            console.log("FAILED...", error.text);
            toast.error("Something Went Wrong", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }
        );
    }
  };

  const handleNavigation = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="contact_container" id="ContactMe">
      <div className="heading">
        <p>Contact Me</p>
      </div>

      <div className="center_container">
        <div className="left_container">
          <div className="sub_heading">
            {/* <p>Don't be a stranger,</p> */}
            {/* <p>just say hello !</p> */}
            <p>Drop Me A Message</p>
          </div>
          <p className="para">
            Feel free to reach out to me regarding any inquiries or
            opportunities. I'm always eager to connect and discuss potential
            projects .
          </p>
          <div className="info">
            <div className="contact">
              <div className="icon_container">
                <CallIcon className="icon" />
              </div>
              <div className="content">+91 9923665145</div>
            </div>
            <div className="email">
              <div className="icon_container">
                <MailOutlineIcon className="icon" />
              </div>
              <div className="content">shiraskar.12@gmail.com</div>
            </div>
            <div className="location">
              <div className="icon_container">
                <LocationOnIcon className="icon" />
              </div>
              <div className="content">
                Jamankar Nagar , Yavatmal - 445001 , Mahashtra , India
              </div>
            </div>
          </div>
        </div>

        <div className="form_container">
          <form className="form" ref={form} onSubmit={sendEmail}>
            <div className="header"></div>
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              onChange={handleChange}
              value={userObj.user_name}
              autoComplete="off"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              onChange={handleChange}
              value={userObj.user_email}
              autoComplete="off"
            />
            <textarea
              id="msg"
              cols="4"
              rows="3"
              name="user_msg"
              placeholder="Message"
              onChange={handleChange}
              value={userObj.user_msg}
            ></textarea>
            <input type="submit" value="send" className="btn send_btn" />
          </form>
        </div>
      </div>

      <div className="footer">
        <div className="logo">Piyush Shiraskar</div>
        <div className="warning">Copyright © 2023 . All rights reserved.</div>
        <div className="social">
          <div
            className="icon_container"
            onClick={() =>
              handleNavigation(
                "https://www.linkedin.com/in/piyush-shiraskar-657621149/"
              )
            }
          >
            <LinkedInIcon className="linkedin icon" />
          </div>
          <div
            className="icon_container"
            onClick={() => handleNavigation("https://github.com/PShiraskar23")}
          >
            <GitHubIcon className="github icon" />
          </div>
          <div
            className="icon_container"
            onClick={() => handleNavigation("https://www.instagram.com/piyush_shiraskar/")}
          >
            <InstagramIcon className="instagram icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;