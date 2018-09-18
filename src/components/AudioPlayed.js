import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  max-width: 550px;
  margin: 11px auto;
  height: auto;
`;

const Audio = styled.audio`
  width: 100%;
  margin: 0;
`;

const AudioPlayer = props => (
  <Container>
    <Audio
      controls
      autoPlay
      src={
        typeof props.source === "object"
          ? "http://www.everyayah.com/data/Abdul_Basit_Mujawwad_128kbps/059021.mp3"
          : props.source
      }
    >
      Your browser does not support the audio element.
    </Audio>
  </Container>
);

export default AudioPlayer;
