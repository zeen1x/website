import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"
import { FaFacebookSquare  } from 'react-icons/fa'
import { FaLinkedinIn  } from 'react-icons/fa'
import { IconContext } from "react-icons";

const Header = ({ siteTitle }) => (
  <header className='masthead bg-primary text-white text-center'>
      <div className='container d-flex align-items-center flex-column'>
          <Image />
          <h1 className='masthead-heading mb-0'>{siteTitle}</h1>
          <div className='divider-custom divider-light'>
              <div className='divider-custom-line'></div>
              <div className='divider-custom-icon'><i className='down-arrow'></i></div>
              <div className='divider-custom-line'></div>
          </div>
          <p className='pre-wrap masthead-subheading font-weight-light mb-0'>Développeur Web Junior</p>
          <IconContext.Provider value={{ className: "fa-icons" }}>
            <ul className="social">
                <li><a href="https://www.facebook.com/francis.desbiens.18"><FaFacebookSquare /></a></li>
                <li><a href="https://www.linkedin.com/in/francis-desbiens-292347117/"><FaLinkedinIn /></a></li>
            </ul>
          </IconContext.Provider>
      </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
