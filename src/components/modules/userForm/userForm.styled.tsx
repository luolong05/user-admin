import styled from "styled-components";
import { deviceSize } from "@/config/layout/";

export const UserFormWrapStyled = styled.div`
  padding: 150px 12px 0;
`;

export const UserFormStyled = styled.form`
  margin: 0 auto;
  width: 400px;
  @media (max-width: ${deviceSize.pad}) {
    width: 100%;
  }
`;

export const UserFormBtnWrapStyled = styled.div`
  text-align: center;
`;

export const UserFormResultStyled = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
  font-size: 16px;
  color: ${props => props.theme.defaultFontColor};
  text-align: center;
`;