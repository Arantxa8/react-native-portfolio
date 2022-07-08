import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity, Linking } from "react-native";
import Background from "../layouts/Background";

const SkillsScreen = () => {
//Coding languages logos  
    const images = [
    require("../assets/html-css.png"),
    require("../assets/C1.png"),
    require("../assets/C2.png"),
    require("../assets/express.png"),
    require("../assets/git.png"),
    require("../assets/java.png"),
    require("../assets/jquery.png"),
    require("../assets/mysql.png"),
    require("../assets/node.png"),
    require("../assets/php.png"),
    require("../assets/python.png"),
    require("../assets/reactlogo.png"),
  ];
  return (
    <Background>
      <Text style={styles.heading}>Programming languages and tools</Text>
      <Text style={styles.textContent}>
        Some of the programming languages and tools used in a recently finished
        bootcamp.
      </Text>
      <View style={styles.skillsContainer}>
        {images.map((img, index) => (
          <Image key={index} style={styles.logos} source={img} />
        ))}
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: "#000000",
    fontSize: 30,
    lineHeight: 40,
    fontWeight: "bold",
    textAlign: "center",
    opacity: 1,
    
    marginTop: 45,
    paddingLeft: 30,
    paddingRight: 30,
  },
  textContent: {
    color: "#333333",
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 25,
    padding: 20,
    textAlign: "justify",
    
  },
  logos: {
    width: 100,
    height: 100,
    margin: 5,
    resizeMode: "contain",
  },
  skillsContainer: {
    justifyContent: "center",
    alignContent: "center",
    margin: 10,
    padding: 10,
    backgroundColor: "#FFFFFF99",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
export default SkillsScreen;
