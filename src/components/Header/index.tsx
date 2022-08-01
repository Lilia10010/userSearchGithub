import React from "react";
import { FiGithub } from "react-icons/fi";
import { Container, Logo } from "./styles";

const Header = () => {
  return (
    <Container>
      <Logo>SearchGithub</Logo>
      <FiGithub size={30} />
    </Container>
  );
};

export default Header;
