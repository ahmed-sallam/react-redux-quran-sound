import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const Item = styled.h1`
  font-size: 1.5rem;
  padding: 1.5rem
  border-bottom: 1px dotted #e0e0e0
    ${props =>
      props &&
      css`
        &:hover {
          background: #eeeeee;
        }
      `};
`;
const Container = styled.div`
  text-align: center;
  padding: 2rem 0;
`;

const Home = () => (
  <Container>
    <Link to="/reciters">
      <Item>Names Of Reciters</Item>
    </Link>
    <Link to="/surah">
      <Item>Names Of Surah</Item>
    </Link>
    <Link to="/rewaya">
      <Item>Reciters By Rewaya</Item>
    </Link>
  </Container>
);
export default Home;
