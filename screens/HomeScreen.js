import { StatusBar } from "expo-status-bar";
import {
  Image,
  ScrollView,
  ScrollViewBase,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Pressable,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import Colors from "../Colors";
import { useState } from "react";

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);

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
          source={require("../assets/ankur.jpg")}
        />
      </View>
      <View
        style={{
          borderRadius: 40,
          backgroundColor: Colors.accent,
          width: "100%",
          height: "100%",
          paddingHorizontal: 40,
          paddingVertical: 40,
        }}
      >
        <View
          style={{
            borderRadius: 10,
            backgroundColor: Colors.main,
            minHeight: 200,
            paddingHorizontal: 20,
            paddingVertical: 20,
            shadowColor: Colors.main,
            shadowOffset: { height: 2, width: 4 },
          }}
        >
          <Text
            style={{
              borderRadius: 10,
              color: Colors.accent,
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </Text>
        </View>
        {/* <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable> */}
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
