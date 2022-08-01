import React from "react";
import { TbHandClick } from "react-icons/tb";
import { Container, LinkRepo, Title } from "./styles";

interface ReposProps {
  dataUser: any;
  dataBrach: any;
}

const CardDetailsBranches = ({ dataUser, dataBrach }: ReposProps) => {
  return (
    <Container>
      <Title>Clique na branch para listar seus commits</Title>
      {dataUser.map((value: any, index: any) => (
        <LinkRepo
          key={index}
          onClick={() => {
            dataBrach(value.name);
          }}
        >
          <strong>branch:</strong> {value.name} <span>listar commits: </span>
          <TbHandClick />
        </LinkRepo>
      ))}
    </Container>
  );
};

export default CardDetailsBranches;
