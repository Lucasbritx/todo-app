import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${(props) => props.theme.white};
  display: flex;
  margin: 0 16px;
  height: 90%;
`;

export const Title = styled.Text`
  font-size: 20;
  line-height: 32;
  margin-top: 16;
  font-weight: bold;
  color: #0170a5;
`;

export const NewTodoButton = styled.TouchableOpacity`
  background-color: #0170a5;
  justify-content: center;
  height: 64px;
  width: 64px;
  margin: 16px;
  align-items: center;
  border-radius: 9999px;
  position: absolute;
  bottom: 0;
  right: 0;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.23;
  shadow-radius: 2.62px;
  elevation: 4;
`;

export const NewTodoButtonText = styled.Text`
  font-size: 32;
  line-height: 40;
  color: #fff;
`;
