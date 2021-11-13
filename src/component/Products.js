import React from "react";
import styled from "styled-components";
import Select from "./Select";
import Search from "./Search";

const Products = () => {
  return (
    <Wrapper>
      <Heading>Find your next place to live</Heading>
      <Wrap>
      <Selects>
        <Select placeholder="Looking For"/>
        <Select placeholder="Property type"/>
        <Select placeholder="Type"/>
      </Selects>
      <SearchBox>
        <Search />
      </SearchBox>
      </Wrap>
    </Wrapper>
  );
};

export default Products;

const Wrapper = styled.div`
  margin: 20px;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
`;
const Heading = styled.h3`
  font-weight: 500;
  letter-spacing: 0.6px;
  margin-bottom: 20px;
`;

const Selects = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
`;
const SearchBox = styled.div``;
const Wrap = styled.div`
display: flex;
justify-content: space-around;
padding: 9px 20px;
background-color: #f5f5f5;
border-radius: 5px;
`;
