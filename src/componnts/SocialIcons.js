import React from 'react'
import {FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa'
import { StyledSocialIcons } from './styles/SocialIcon.style'
const SocialIcons = () => {
  return (
    <StyledSocialIcons>
      <li>
        <a href='https://twitter.com'> <FaTwitter/></a>
        <a href='https://linkedin.com'> <FaLinkedin/></a>
        <a href='https://facebook.com'> <FaFacebook/></a>
      </li>
    </StyledSocialIcons>
  )
}

export default SocialIcons
