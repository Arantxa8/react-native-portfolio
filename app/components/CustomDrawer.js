import React from "react";
import { DrawerItemList } from "@react-navigation/drawer";
import { StyleSheet, Image, View,TouchableOpacity, Linking,Text } from "react-native";
import LinkingWebsite from "./LinkingWebsite";

//Inserting custom image in the Drawer
const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../assets/DrawerImage.jpeg")}
        style={styles.img}
      />

      <DrawerItemList {...props} />
      <LinkingWebsite/>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 240,
    height: 200,
  },
});

export default CustomDrawer;
