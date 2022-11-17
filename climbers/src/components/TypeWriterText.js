import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';
import {Button, Button3} from './Button';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

const Title = styled.h2`
    font-size: ${props => props.theme.fontxxxl};
    text-transform: capitalize;
    font-weight: 800;
    width: 80%;
    color: ${props => props.theme.text};
    align-self: flex-start;
    padding-bottom: 20px;

span {
    text-transform: uppercase;
    font-family: "Akaya Telivigala", cursive;
}
.text-1{
    color: blue;
}
.text-2{
    color: orange;
}
.text-3{
    color: red;
}

@media (max-width: 70em) {
    font-size: ${props => props.theme.fontxl};
}

@media (max-width: 48em) {
    align-self: center;
    text-align: center;
    font-size: ${props => props.theme.fontxxl};
}
@media (max-width: 40em){
    width: 90%;
    font-size: ${props => props.theme.fontxl};
}
`;

const SubTitle = styled.h3`
    font-size: 28px;
    line-height: 2.7rem;
    text-transform: capitalize;
    color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
    font-weight: 600;
    margin-bottom: 1rem;
    width: 80%;
    align-self: flex-start;
    padding-bottom: 10px;

    @media (max-width: 40em) {
        font-size: ${props => props.theme.fontmd};
        line-height: 1.7rem;
    }

    @media (max-width: 48em) {
        align-self: center;
        text-align: center;
        // line-height: 2.7rem;
    }
`

const ButtonContainer = styled.div`
    width: 80%;
    align-self: flex-start;

    @media (max-width: 48em) {
        // width: 100%;
        align-self: center;
        text-align: center;
        background-color: blue;

        button{
            margin: 0 auto; 
        }
    }
`

const Box1 = styled.div`
  width: 30%;
  height: 100%;
//   background-color: blue;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

@media (max-width: 48em) {
    width: 50%; 
    padding-bottom: 10px;
 }
`

const Box2 = styled.div`
  width: 90%;
  height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// background-color: red;

@media (max-width: 48em) {
    width: 50%;
    display: flex;
    align-items: center;
 }
`

const Container = styled.div`
     width: 100%;
     align-self: flex-start;
     flex-direction: flex-start;
//   min-height: 80vh;
//   margin: 0 auto;
    // background-color: blue;
     display: flex;
    //  justify-content: center;
    //  align-items: center;

     @media (max-width: 48em) {
        width: 95%;
        align-self: center;
        text-align: center;
        align-items: center;
        flex-direction: column;
     }

        button{
            margin: 0 auto; 
        }
  `

const TypeWriterText = () => {
  return (
    <>
    <Title>
        The Climbers
        {/* <Typewriter
        options={{
            autoStart: true,
            loop: true,
        }}
  onInit={(typewriter) => {
    typewriter.typeString('<span class="text-1">NFTs.</span>')
      .pauseFor(2000)
      .deleteAll()
      .typeString('<span class="text-2">Collectible Items.</span>')
      .pauseFor(2000)
      .deleteAll()
      .typeString('<span class="text-3">Ape Killers!</span>')
      .pauseFor(2000)
      .deleteAll()
      .start()
  }}
/> */}
    </Title>
    <SubTitle>Do you have what it takes to make the climb?</SubTitle>
    {/* <ButtonContainer> */}
        <Container>
        <Box1><Button text="Play" link="#about" /></Box1>
        <Box2><Button3 text=" Watch" link="https://youtu.be/x7x6JDMW64Q" /></Box2>
        </Container>
    {/* </ButtonContainer> */}
    </>
  );
};

export default TypeWriterText