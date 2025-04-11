import { View } from "react-native";
import { Button } from "react-native-paper";
import React, { useContext } from "react";
import { AppContext } from "../AppProvider";

export function W4(props) {
  const { Value, decrement } = useContext(AppContext);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightcoral",
      }}
    >
      <Button mode="contained" onPress={() => decrement()}>
        Decrease
      </Button>
    </View>
  );
}
