import React, { Children, useState } from "react";
import { TbHandClick } from "react-icons/tb";
import { Container, LinkRepo } from "./styles";

interface ReposProps {
  dataUser: any;
  dataBrach: any;
}

const CardDetailsRepos = ({ dataUser, dataBrach }: ReposProps) => {
  const [repos] = useState(dataUser.response.repos.data);

  return (
    <Container>
      {repos.map((value: any, index: any) => (
        <LinkRepo
          key={index}
          onClick={() => {
            dataBrach(value.name);
          }}
        >
          {value.name} <TbHandClick />
        </LinkRepo>
      ))}
    </Container>
  );
};

export default CardDetailsRepos;
