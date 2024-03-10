import React from "react";
import { Image, Text, View } from "react-native";
/* import styles from "./styles"; */

export default function Header() {
  return (
    <View>
      <Image source={require("../../assets/delta-white-logo.svg")} />
      <Text>Header first commit</Text>
    </View>
  );
}
