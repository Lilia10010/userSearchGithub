import styled from "styled-components";

export const Container = styled.div``;

export const LinkRepo = styled.div`
  display: flex;
  strong {
    margin-right: 15px;
  }

  svg {
    margin-left: 20px;
  }
  cursor: pointer;
  padding: 5px 0;
  transition: 0.3s;

  :hover {
    color: var(--color-primary);
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0 15px;
  font-size: 18px;
`;
