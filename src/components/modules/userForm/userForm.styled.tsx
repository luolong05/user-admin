import styled from "styled-components";

export const UserFormWrapStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    margin-top: 100px;
    height: 100vh;
  }
  @media (max-width: 768px) {
    margin: 50px 12px 0;
  }
`;

export const UserFormStyled = styled.form`
  border: 1px solid ${props => props.theme.colorDefault};
  padding: 30px;
  width: 400px;
  border-radius: 4px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const UserFormResultStyled = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
  font-size: 16px;
  color: ${props => props.theme.defaultFontColor};
`;