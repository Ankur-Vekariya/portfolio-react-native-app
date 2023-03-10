import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View, StatusBar } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProjectScreen from "./screens/ProjectScreen";
import Colors from "./Colors";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator sceneContainerStyle={{ backgroundColor: Colors.main }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="Settings"
        component={ProjectScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tab"
          component={MyTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
