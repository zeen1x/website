import React from "react"

function Footer() {
    return (
        <footer>
            <div className="row">
                <div className="twelve columns">
                    <ul className="social-links">
                        <li><a href="https://www.facebook.com/francis.desbiens.18"><i className="fa fa-facebook" /></a></li>
                        <li><a href="https://www.linkedin.com/in/francis-desbiens-292347117/"><i className="fa fa-linkedin" /></a></li>
                        <li><a href="https://www.instagram.com/fran6.desbiens/"><i className="fa fa-instagram" /></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>© Copyright 2014 CeeVee</li>
                        <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
                    </ul>
                </div>
                <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;