import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--background-secondary);
  margin: 10px 0;
  padding: var(--padding-inner-default);
  border-radius: var(--border-radius-primary);
  box-shadow: var(--box-shadow-primary);
`;

export const CardInitial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  height: 50vh;

  svg {
    font-size: 200px;
    opacity: 0.03;
  }
`;

export const UserNotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;

  .ops {
    font-size: 24px;
    margin: 50px 0 20px;
    color: var(--color-primary);
  }

  span {
    text-decoration: underline;
    text-decoration-color: var(--color-primary);
    font-weight: bold;
  }
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
