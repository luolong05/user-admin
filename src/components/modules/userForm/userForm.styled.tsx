import styled from "styled-components";

export const UserFormWrapStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  width: 100vw;
  height: 100vh;
`;

export const UserFormStyled = styled.form`
  border: 1px solid ${props => props.theme.colorDefault};
  padding: 30px;
  width: 400px;
  border-radius: 4px;
`;

export const UserFormResultStyled = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
  font-size: 16px;
  color: ${props => props.theme.defaultFontColor};
`;