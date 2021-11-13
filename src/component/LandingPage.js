import React from 'react'
import Appbar from './Appbar'
import Hero from './Hero'
import styled from 'styled-components'
import Products from './Products'

const LandingPage = () => {
    return (
        <Container>
            <Appbar/>
            <Hero/>
            <Products/>
        </Container>
    )
}

export default LandingPage

const Container=styled.div ` 
background-color: #f5f5f5;
height: 100vh;
`