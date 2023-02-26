import { StatusBar } from "expo-status-bar";
import {
  Image,
  ScrollView,
  ScrollViewBase,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "100%" }}>
        <View style={{ height: 2000 }}>
          <Image
            style={{ width: "100%", height: 500 }}
            source={require("./assets/ankur.jpg")}
          />

          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </ScrollView>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 2,
    // borderColor: "red",
  },
});
