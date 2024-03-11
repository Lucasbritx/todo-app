import styled from "styled-components/native";

export const Input = styled.TextInput<{ hasError?: boolean }>`
  border: ${(props) => (props.hasError ? "1px solid red" : "1px solid #000")};
  padding: 8px;
  margin-top: 8px;
  border-radius: 8px;
  width: 100%;
  font-size: 16px;
  color: ${(props) => props.theme.textSecondary};
`;
