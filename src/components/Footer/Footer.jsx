import React from 'react'
import styled from 'styled-components'


function Footer() {
  return (
    <FooterStyled>
    Copyright © 2022 The Rick and Morty  By FranciscoHIDev.
    </FooterStyled>
  )
}

export default Footer

const FooterStyled = styled.footer`
    background-color: #e6576e;
    padding:40px;
    margin-top: 25px;
    border-radius: 2em 2em 0 0;  
    text-align: left;
    color: #fff;
    text-shadow: black 0.1em 0.1em 0.1em;
    `
  