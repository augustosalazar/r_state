import React, { useContext } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { AppContext } from "../AppProvider";

export function W2(props) {
  const { Value, reset } = useContext(AppContext); // Use AppContext here
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgreen",
      }}
    >
      <Text>{Value}</Text> 
      <Button mode="contained" onPress={() => reset()}>
        Reset
      </Button>
    </View>
  );
}
