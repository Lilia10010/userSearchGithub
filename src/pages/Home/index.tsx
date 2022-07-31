import React from "react";
import Header from "../../components/Header";
import SearchInput from "../../components/SearchInput";

import { Container, WrapperHome } from "./styles";

const Home = () => {
  return (
    <Container>
      <WrapperHome>
        <Header />
        <SearchInput />
      </WrapperHome>
    </Container>
  );
};
export default Home;
