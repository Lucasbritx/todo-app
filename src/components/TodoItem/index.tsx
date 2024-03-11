import React from "react";
import { Text, View } from "react-native";
import { Card, Category, Title } from "./styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import useTodoItem from "./useTodoItem";
import { ITodo } from "../../interfaces/todo";

export default function TodoItem({
  name,
  completed,
  category,
  id,
  limitDate,
}: ITodo) {
  const { formattedDate, checkItem } = useTodoItem(id, limitDate);
  return (
    <Card>
      <BouncyCheckbox
        size={25}
        fillColor="#0170a5"
        unfillColor="#FFFFFF"
        textComponent={
          <View>
            <Title numberOfLines={1}>{name}</Title>
            <Category>{category}</Category>
          </View>
        }
        iconStyle={{ borderColor: "#0170a5" }}
        innerIconStyle={{ borderWidth: 2 }}
        isChecked={completed}
        onPress={(completed) => checkItem(completed)}
      />
      <Text>{formattedDate}</Text>
    </Card>
  );
}
