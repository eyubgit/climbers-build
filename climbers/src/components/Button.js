import { icon } from '@fortawesome/fontawesome-svg-core'
import React from 'react'
import styled from 'styled-components'
// import { FaYoutube } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Youtube from '../assets/YT.png'
import '../App.css'


const Btn = styled.button`
    display: inline-block;
    background-color: #0F52BA;
    color: ${props => props.theme.body};
    outline: none;
    border: none;
    width: 147px;

    font-size: ${props => props.theme.fontsm};
    padding: 0.9rem 2.3rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;

    &:hover{
        transform: scale(0.9);
    }

    &::after{
        content: ' ';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        border: 2px solid #0F52BA;
        width: 100%;
        height: 100%;
        border-radius: 50px;
        transition: all 0.2s ease;
    }

    &:hover::after{
        transform: translate(-50%, -50%) scale(1);
        padding: 0.3rem;
    }
`

const WalletBtn = styled.button`
    display: inline-block;
    background-color: #0F52BA;
    color: ${props => props.theme.body};
    outline: none;
    border: none;

    font-size: ${props => props.theme.fontsm};
    padding: 0.9rem 2.3rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;

    &:hover{
        transform: scale(0.9);
    }

    &::after{
        content: ' ';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        border: 2px solid #0F52BA;
        width: 100%;
        height: 100%;
        border-radius: 50px;
        transition: all 0.2s ease;
    }

    &:hover::after{
        transform: translate(-50%, -50%) scale(1);
        padding: 0.3rem;
    }
`

const YBtn = styled.button`
    display: inline-block;
    background-color: #0F52BA;
    color: ${props => props.theme.body};
    outline: none;
    border: none;

    font-size: ${props => props.theme.fontsm};
    padding: 0.9rem 2.3rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;

    &:hover{
        transform: scale(0.9);
    }

    &::after{
        content: ' ';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        border: 2px solid #0F52BA;
        width: 100%;
        height: 100%;
        border-radius: 50px;
        transition: all 0.2s ease;
    }

    &:hover::after{
        transform: translate(-50%, -50%) scale(1);
        padding: 0.3rem;
    }
`

const img = styled.img

export const Button = ({text, link, icon}) => {
  return (
    <Btn>
        <a icon={icon} href={link} aria-label={text} target="_blank" rel="noreferrer">
            {text}
        </a>
    </Btn>
    
  )
}

export const Button2 = ({text, link, icon}) => {
    return (
      <WalletBtn>
          <a icon={icon} href={link} aria-label={text} target="_blank" rel="noreferrer">
              {text}
          </a>
      </WalletBtn>
      
    )
  }

  export const Button3 = ({text, link, icon}) => {
    return (
      <YBtn>
          <img src={Youtube} className="Youtube"/>
          <a icon={icon} href={link} aria-label={text} target="_blank" rel="noreferrer">
              {text}
          </a>
      </YBtn>
      
    )
  }
