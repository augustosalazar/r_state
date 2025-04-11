import { View, Text } from "react-native";
import { Button } from "react-native-paper";

export function Page2(props) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Value</Text>
      <Button mode="contained" onPress={() => console.log("Button pressed")}>
        Increment
      </Button>
    </View>
  );
}
