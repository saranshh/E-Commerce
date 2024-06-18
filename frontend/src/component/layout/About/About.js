import React from "react";
import "./About.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  // const visitInstagram = () => {
  //   window.location = "https://instagram.com/saransh.xyz";
  // };
  return (
    <div className="aboutSection">
      <div></div>
      {/* <div className="aboutSectionGradient"></div> */}
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://pbs.twimg.com/profile_images/1413095566519640064/MEo2n-7x_400x400.jpg"
              alt="Founder"
            />
            <Typography className="founderName">Saransh Chaurasia</Typography>
    
            <span>
              This is a sample wesbite made by Saransh. It is 
              designed for the purpose of learning & to know about
              how actually E-Commerce websites are working. It's having 
              too much fun while learning through the project.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://github.com/saranshh"
              target="blank"
            >
              <GitHubIcon className="GithubSvgIcon" />
            </a>

            <a href="https://www.facebook.com/saransh.chaurasia.1" target="blank">
              <FacebookIcon className="facebookSvgIcon" />
            </a>

            <a href="https://instagram.com/saransh.xyz" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>

            <a href="https://twitter.com/saransh9803" target="blank">
              <TwitterIcon className="twitterSvgIcon" />
            </a>

            <a href="https://www.linkedin.com/in/saransh-chaurasia-8b9091203/" target="blank">
              <LinkedInIcon className="linkedInSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;