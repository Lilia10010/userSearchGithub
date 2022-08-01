import React, { useState } from "react";
import { TbHandClick } from "react-icons/tb";
import { Container, LinkRepo, Title } from "./styles";

interface ReposProps {
  dataUser: any;
  dataBrach: any;
}

const CardDetailsRepos = ({ dataUser, dataBrach }: ReposProps) => {
  const [repos] = useState(dataUser.response.repos.data);

  return (
    <Container>
      {repos.length > 0 ? (
        <>
          <Title>Clique no repositório para listar suas branches</Title>
          {repos.map((value: any, index: any) => (
            <LinkRepo
              key={index}
              onClick={() => {
                dataBrach(value.name);
              }}
            >
              <strong>repo: </strong>
              {value.name}

              <TbHandClick />
            </LinkRepo>
          ))}
        </>
      ) : (
        <Title>Nada para ser listado deste repositório</Title>
      )}
    </Container>
  );
};

export default CardDetailsRepos;
