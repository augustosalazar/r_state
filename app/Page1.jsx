import { View } from "react-native";
import { W1 } from "./W1";
import { W2 } from "./W2";
import { W3 } from "./W3";
import { W4 } from "./W4";
import { Button, Text } from "react-native-paper";

export function Page1(navigation) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2, flexDirection: "row" }}>
        <View style={{ margin: 10 }}>
          <W1 style={{ flex: 2 }} />
        </View>
        <View style={{ margin: 10 }}>
          <W2 style={{ flex: 2 }} />
        </View>
        <View style={{ flex: 1 }}>
          <W3 />
        </View>
        <View style={{ margin: 10 }}>
          <W4 style={{ flex: 2 }} />
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button
          mode="contained"
          onPress={() => navigation.navigation.navigate("Page2")}
        >
            Page 2
        </Button>
      </View>
    </View>
  );
}
