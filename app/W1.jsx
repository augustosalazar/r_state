import React, { useContext } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { AppContext } from "../AppProvider";

export function W1(props) {
  const { Value, increment } = useContext(AppContext); 
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
      }}
    >
      <Text>{Value}</Text>
      <Button mode="contained" onPress={() => increment()}>
        Increment
      </Button>
    </View>
  );
}
