import React from 'react'
import Logo from "../../../images/logo-footer.png"
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css"

const Footer = () => {
    return (
        <footer id="footer">
            <div className="leftFooter">
            {/* <h3>Download Our App</h3> */}
            <p>Download Our App for Android and iOS mobile phone</p>
            <img src={playStore} alt="playstore" />
            <img src={appStore} alt="Appstore" />
            </div>

            <div className="midFooter">
            {/* <h1>Paytm</h1> */}
            <a href="/">
            <img src={Logo} alt="logo" />
            </a>
            <p>High Quality is our first priority</p>
            <p>Copyright 2023 &copy; Saransh</p>
            </div>

            <div className="rightFooter">
            <h4>Follow Us</h4>
            <a href="/">Facebook</a>
            <a href="/">Instagram</a>
            <a href="/">Twitter</a>
            <a href="/">Github</a>
            </div>
        </footer>
    )
}

export default Footer
