import React from 'react'
import SocialIcons from './SocialIcons'
import { Container } from './styles/Container.style'
import { Flex } from './styles/Flex.styles'
import { StyledFooter } from './styles/Footer.style'

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <img src='./images/logo_white.svg' alt='' />

        <Flex>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <ul>
                <li>About Us</li>
                <li>Blog</li>
                <li>FAQ</li>
            </ul>
            <ul>
                <li>Carrer</li>
                <li>Blog</li>
                <li>Contact Us</li>
            </ul>
            <SocialIcons/>
        </Flex>
        <p>&copy; 2022 Huddle. All rights reserved</p>
      </Container>
    </StyledFooter>
  )
}

export default Footer
