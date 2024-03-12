import React from "react";
import { Text, TextInput, View } from "react-native";
import { Input } from "./styles";

interface ITextField {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  hasError?: boolean;
}

const TextField = ({
  label,
  value,
  onChangeText,
  placeholder = "",
  hasError,
}: ITextField) => (
  <View>
    {label && <Text>{label}</Text>}
    <Input
      hasError={hasError}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
    />
  </View>
);

export default TextField;
