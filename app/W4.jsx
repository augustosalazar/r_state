import { View } from "react-native";
import { Button } from "react-native-paper";

export function W4(props) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightcoral",
      }}
    >
      <Button 
      mode="contained"
      onPress={() => console.log("Button pressed")}>Decrease</Button>
    </View>
  );
}
