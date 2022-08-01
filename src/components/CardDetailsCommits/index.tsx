import React from "react";
import { Container, LinkRepo } from "./styles";

interface ReposProps {
  dataUser: any;
}

const CardDetailsCommits = ({ dataUser }: ReposProps) => {
  return (
    <Container>
      {dataUser.map((value: any, index: any) => (
        <LinkRepo key={index}>
          <strong>commit:</strong> {value.commit.message}
        </LinkRepo>
      ))}
    </Container>
  );
};

export default CardDetailsCommits;
