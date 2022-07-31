import styled from "styled-components";

export const Container = styled.div`
  padding: var(--padding-inner-default);
  border-radius: var(--border-radius-primary);
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const WrapperCard = styled.div`
  background: var(--background-secondary);
  max-width: 500px;
  width: 100%;

  box-shadow: var(--box-shadow-primary);
  border-radius: var(--border-radius-primary);
  padding: var(--padding-inner-default);
`;

export const InfoUser = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .name {
    margin-top: 10px;
    font-size: 20px;
    color: #fff;
    font-weight: bold;
  }

  .login {
    margin-top: 5px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    svg {
      margin-right: 5px;
    }
  }
  .bio {
    margin-top: 15px;
  }
`;

export const InFoOther = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 50px;

  .location {
    display: flex;
    align-items: center;

    svg {
      margin-right: 5px;
    }
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  min-width: 70px;
  max-width: 150px;
  align-self: center;
  width: 100%;
  object-fit: cover;
`;
