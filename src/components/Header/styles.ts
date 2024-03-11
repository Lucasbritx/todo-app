import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  background-color: ${({ theme }) => theme.primary};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  padding-top: 32px;
`;

export const Image = styled.Image`
  width: 70px;
  height: 28px;
  object-fit: contain;
`;

export const WelcomeText = styled.Text`
  color: ${({ theme }) => theme.white};
  font-size: 16px;
  font-weight: bold;
`;
