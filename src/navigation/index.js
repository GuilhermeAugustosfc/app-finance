import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import ExpanseList from "../screens/ExpanseList";
import Graphics from "../screens/Graphics";
import FormExpanse from "../screens/FormExpanse";

//Screen names
const expanseListName = "Lista";
const graphicsName = "Graficos";
const formExpanseName = "Cadastro";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={expanseListName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === expanseListName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === graphicsName) {
              iconName = focused ? "podium" : "podium-outline";
            } else if (rn === formExpanseName) {
              iconName = focused ? "pricetags" : "pricetags-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "grey",
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70 },
        }}
      >
        <Tab.Screen name={expanseListName} component={ExpanseList} />
        <Tab.Screen name={formExpanseName} component={FormExpanse} />
        <Tab.Screen name={graphicsName} component={Graphics} />
        {/* <Tab.Screen name={settingsName} component={SettingsScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
