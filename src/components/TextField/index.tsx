import React from "react";
import { Text, View } from "react-native";
import { Input } from "./styles";
import { TextInput } from "react-native-paper";

interface ITextField {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  hasError?: boolean;
  leftIcon?: string;
}

const TextField = ({
  label,
  value,
  leftIcon,
  onChangeText,
  placeholder = "",
  hasError,
}: ITextField) => (
  <View>
    <TextInput
    label={label}
      mode="outlined"
      error={hasError}
      onChangeText={onChangeText}
      value={value}
      left={leftIcon && <TextInput.Icon icon={leftIcon} />}
      placeholder={placeholder}
    />
  </View>
);

export default TextField;
