import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <Container>
      <Text>
        <h2>Beautiful home made for you</h2>
      </Text>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  width: 100%;
  height: 60vh;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("https://images.unsplash.com/photo-1556742212-5b321f3c261b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")
    no-repeat center center/cover;
`;
const Text = styled.div`
  h2 {
    font-weight: 500;
    color: #fff;
  }
`;
