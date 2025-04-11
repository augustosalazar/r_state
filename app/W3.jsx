import React, { useContext } from "react";
import { View, Text } from "react-native";
import { AppContext } from "../AppProvider";

export function W3(props) {
  const { Value, increment } = useContext(AppContext);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightyellow",
      }}
    >
      <Text>{Value}</Text>
    </View>
  );
}
