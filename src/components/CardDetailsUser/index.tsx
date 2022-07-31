import React, { useState } from "react";
import { FiGithub } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { Container, WrapperCard, InfoUser, InFoOther, Avatar } from "./styles";

interface UserProps {
  dataUser: any;
}
const CardDetailsUser = ({ dataUser }: UserProps) => {
  const [user] = useState(dataUser.response.user.data);
  const [repos] = useState(dataUser.response.repos.data);
  return (
    <Container>
      <WrapperCard>
        <InfoUser>
          <Avatar src={user.avatar_url} />
          <div>
            <span className="name">{user.name}</span>
            <div className="login">
              <FiGithub />
              {user.login}
            </div>
            <div className="bio">bio: {user.bio}</div>
          </div>
        </InfoUser>
        <InFoOther>
          <div className="location">
            <GoLocation />
            {user.location}
          </div>
          <div>repos: {repos.length}</div>
        </InFoOther>
      </WrapperCard>
    </Container>
  );
};

export default CardDetailsUser;
