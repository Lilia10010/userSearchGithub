import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--background-secondary);
  margin: 10px 0;
  padding: var(--padding-inner-default);
  border-radius: var(--border-radius-primary);
  box-shadow: var(--box-shadow-primary);
`;

export const WrapperSearch = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CardDescription = styled.div`
  background: var(--background-secondary);
  width: 100%;
  margin-top: -100px;
  border-radius: var(--border-radius-primary);
  box-shadow: var(--box-shadow-primary);
  padding: 100px 20px 10px;
`;
export const Input = styled.input`
  color: white;
  background: transparent;
  min-width: 0px;
  border: medium none transparent;
  outline: currentcolor none medium;
  width: 100%;
  padding: 0 10px;
`;
export const Button = styled.button`
  padding: 5px 10px;
  background: var(--color-primary);
  color: white;
  font-weight: 700;
  transition: 0.3s;
  border: medium none;
  border-radius: var(--border-radius-primary);

  :hover {
    opacity: 0.8;
  }
`;

export const WrapperCards = styled.div``;
