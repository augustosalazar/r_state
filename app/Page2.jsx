import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { AppContext } from "../AppProvider";
import React, { useContext } from "react";

export function Page2(props) {
    const { Value, increment } = useContext(AppContext);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{Value}</Text>
      <Button mode="contained" onPress={() => increment()}>
        Increment
      </Button>
    </View>
  );
}
