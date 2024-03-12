import styled from "styled-components/native";

export const Card = styled.View`
  background-color: ${(props) => props.theme.backgroundPrimary};
  display: flex;
  margin-vertical: 8px;
  padding: 16px;
  gap: 8px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  elevation: 4;
  shadow-color: #000;
  shadow-radius: 2.62px;
`;

export const Category = styled.Text`
  font-size: 14px;
  font-weight: 600;
  border-radius: 16px;
  padding: 8px;
  color: ${(props) => props.theme.textPrimary};
`;

export const Title = styled.Text`
  font-size: 16px;
  line-height: 32px;
  font-weight: bold;
  color: ${(props) => props.theme.textPrimary};
  overflow: hidden;
  margin-left: 8px;
  max-width: 160px;
`;

export const DateText = styled.Text<{ isOutdated?: boolean }>`
  font-size: 14px;
  color: ${(props) => (props.isOutdated ? "red" : props.theme.textSecondary)};
`;
