import React from 'react'
import { Button } from './styles/Button.style'
import { Container } from './styles/Container.style'
import { StyledHeader, Nav, Logo, Image } from './styles/Header.style'
import {Flex}from './styles/Flex.styles'



const Header = () => {
  return (
    <StyledHeader bg='lightblue'>
        <Container>
            <Nav>
                <Logo src='./images/logo.svg' alt='logo' />
                <Button>Try it Free</Button>
            </Nav>
            <Flex>
                <div>
                    <h1>Build The community Your Fans will love</h1>
                    <p>
                        Huddle re-imagines the way we build communities. You
                        have a voice, but so does your audience.
                        Create connections with your users as you engage in genuine 
                        discussions.
                    </p>
                    <Button bg='#ff0099' color='#fff'>Get started for Free</Button>
                </div>
                <Image src='./images/illustration-mockups.svg' alt=''/>
            </Flex>
        </Container>
     
    </StyledHeader>
  )
}

export default Header
