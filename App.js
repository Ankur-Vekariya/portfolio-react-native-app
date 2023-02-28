import { StatusBar } from "expo-status-bar";
import {
  Image,
  ScrollView,
  ScrollViewBase,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import Colors from "./Colors";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ height: "50%" }}>
        <View
          style={{
            position: "absolute",
            top: "10%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            // backgroundColor: "red",
            width: "100%",
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{
              alignItems: "center",
              verticalAlign: "middle",
              fontSize: 20,
              color: Colors.accent,
            }}
          >
            Ankur Vekariya
          </Text>
          <Entypo name="menu" size={30} color={Colors.accent} />
        </View>
        <Image
          style={{ width: "100%", height: 500, opacity: 0.3 }}
          source={require("./assets/ankur.jpg")}
        />
      </View>
      <View
        style={{
          borderRadius: 40,
          backgroundColor: Colors.accent,
          width: "100%",
          height: "100%",
          paddingHorizontal: 50,
          paddingVertical: 50,
        }}
      >
        <View
          style={{
            borderRadius: 10,
            backgroundColor: Colors.main,
            width: "100%",
            height: 100,
          }}
        >
          <Text>Ankur vekariya</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main,
  },
});
