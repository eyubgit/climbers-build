import React from 'react'
import styled from 'styled-components'
import VID from '../assets/The Ladder Overview.mp4'

const InfoVideoContainer = styled.div`
    width: 80%;
    align-self: flex-start;

    video {
        width: 100%;
        height: auto;
    }

    @media (max-width: 64em) {
        min-width: 40vh;
      }
`

const InfoVideo = () => {
  return (
    <InfoVideoContainer>
        <video src={VID} type="video/mp4" autoPlay muted loop />
    </InfoVideoContainer>
  )
}

export default InfoVideo