import React from "react";
import "react-native-gesture-handler";
import WelcomeScreen from "../screens/WelcomeScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/FontAwesome";
import SkillsScreen from "../screens/SkillsScreen";
import CustomDrawer from "./CustomDrawer";
import HobbiesScreen from "../screens/HobbiesScreen";
import ContactScreen from "../screens/ContactScreen";


//create new drawer
const Drawer = createDrawerNavigator();

//Adding screens, settings and styling to drawer
const MyDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          height: 80,
        },
        headerLeft: () => (
          <Icon
            name="bars"
            size={30}
            onPress={() => navigation.openDrawer()}
            style={{ color: "#800080", marginLeft: 20 }}
          />
        ),
        headerTransparent: true,
        headerTitleAlign: "center",
        drawerActiveTintColor: "#800080",
        drawerLabelStyle: { fontSize: 20, lineHeight: 30 },
        drawerStyle: { width: 240 },
        headerTintColor: "#800080",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 27,
          lineHeight: 35,
        },
      })}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="About" component={WelcomeScreen} />
      <Drawer.Screen name="Skills" component={SkillsScreen} />
      <Drawer.Screen name="Hobbies" component={HobbiesScreen} />
      <Drawer.Screen name="Contact" component={ContactScreen} />
      
    </Drawer.Navigator>
  );
};
export default MyDrawer;
