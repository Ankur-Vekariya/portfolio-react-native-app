import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../Colors";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function ProjectScreen() {
  return (
    <View style={styles.container}>
      <View style={{ height: "50%" }}>
        <View
          style={{
            position: "absolute",
            top: "10%",
            display: "flex",
            flexDirection: "row",
            width: "100%",
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{
              alignItems: "center",
              verticalAlign: "middle",
              fontSize: 25,
              color: Colors.accent,
            }}
          >
            Projects
          </Text>
        </View>
        <Image
          style={{
            width: "100%",
            height: 500,
            opacity: 0.3,
            resizeMode: "stretch",
          }}
          source={require("../assets/project.jpg")}
        />
      </View>
      <View
        style={{
          borderRadius: 40,
          backgroundColor: Colors.accent,
          width: "100%",
          height: "100%",
          paddingHorizontal: 20,
          paddingVertical: 20,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={[styles.itemCard, styles.shadowProp]}
            // onPress={() => navigation.navigate("Category")}
          >
            <Text style={{ fontSize: 18, marginLeft: 5 }}>Admin</Text>
            <Text style={{ fontSize: 16, marginLeft: 5 }}>MERN stack</Text>

            <AntDesign name="right" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.itemCard, styles.shadowProp]}
            // onPress={() => navigation.navigate("Tables")}
          >
            <Text style={{ fontSize: 18, marginLeft: 5 }}>Verification</Text>
            <Text style={{ fontSize: 16, marginLeft: 5 }}>MERN stack</Text>

            <AntDesign name="right" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={[styles.itemCard, styles.shadowProp]}
            // onPress={() => navigation.navigate("Category")}
          >
            <Text style={{ fontSize: 18, marginLeft: 5 }}>Portfolio</Text>
            <Text style={{ fontSize: 16, marginLeft: 5 }}>Expo</Text>

            <AntDesign name="right" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.itemCard, styles.shadowProp]}
            // onPress={() => navigation.navigate("Tables")}
          >
            <Text style={{ fontSize: 18, marginLeft: 5 }}>E-Comm</Text>
            <Text style={{ fontSize: 16, marginLeft: 5 }}>Expo</Text>

            <AntDesign name="right" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 20,

    flex: 1,
    // alignItems: "center",
  },
  heading: {
    fontSize: 30,
    fontWeight: "700",
    marginVertical: 10,
    // color: Colors.secondary,
  },
  profileCard: {
    // backgroundColor: Colors.main,
    // borderRadius: 10,
    // paddingVertical: 20,
    // paddingHorizontal: 20,
    // width: "100%",
    // marginBottom: 5,
  },
  itemCard: {
    // display: "flex",
    // flexDirection: "row",
    // justifyContent: "space-between",
    backgroundColor: Colors.secondary,
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: "48%",
    marginVertical: 5,
    shadowColor: "black",
    shadowOffset: { width: -20, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.main,
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
