import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../Colors";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function ProjectScreen() {
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={styles.itemCard}
          // onPress={() => navigation.navigate("Product")}
        >
          <FontAwesome name="product-hunt" size={24} color="black" />
          <Text style={{ fontSize: 18, marginLeft: 5 }}>Products</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.itemCard, styles.shadowProp]}
          // onPress={() => navigation.navigate("ProductList")}
        >
          <Text style={{ fontSize: 18, marginLeft: 5 }}>All Products</Text>
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
          onPress={() => navigation.navigate("Category")}
        >
          <MaterialIcons name="category" size={24} color="black" />
          <Text style={{ fontSize: 18, marginLeft: 5 }}>Category</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.itemCard, styles.shadowProp]}
          onPress={() => navigation.navigate("Tables")}
        >
          <MaterialIcons name="breakfast-dining" size={24} color="black" />
          <Text style={{ fontSize: 18, marginLeft: 5 }}>Tables</Text>
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
          onPress={() => navigation.navigate("Floor")}
        >
          <MaterialIcons name="category" size={24} color="black" />
          <Text style={{ fontSize: 18, marginLeft: 5 }}>Floors</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.itemCard, styles.shadowProp]}
          onPress={() => navigation.navigate("Tables")}
        >
          <MaterialIcons name="breakfast-dining" size={24} color="black" />
          <Text style={{ fontSize: 18, marginLeft: 5 }}>Tables</Text>
        </TouchableOpacity>
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
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
    backgroundColor: Colors.accent,
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
  shadowProp: {
    // shadowColor: "black",
    // shadowOffset: { width: -20, height: 10 },
    // shadowOpacity: 1,
    // shadowRadius: 3,
  },
});
