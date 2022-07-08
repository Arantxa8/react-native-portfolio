import React from "react";
import { Image, StyleSheet, Text } from "react-native";
import Background from "../layouts/Background";

const WelcomeScreen = () => {
  return (
    <Background>
      <Image style={styles.photo} source={require("../assets/photo.jpg")} />
      <Text style={styles.heading}>Arantxa Gomez</Text>

      <Text style={styles.textContent}>
        My interest in tech started back when I was just a young girl, however,
        it was in 2020 that I decided to follow my passion and dive into Web
        Development.
        {"\n"}Following my decision I recently completed an intensive
        eighteen-month long, full-stack Coding Traineeship, covering a broad
        spectrum of powerful front-end and back-end technologies.
        {"\n"}Now I am ready and eager to put my passion into my first
        commercial job to develop even further my knowledge and with that my
        career.
      </Text>
      
    </Background>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: "#000000",
    fontSize: 40,
    lineHeight: 55,
    fontWeight: "bold",
    textAlign: "center",
    opacity: 1,
    
  },
  textContent: {
    color: "#333333",
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 25,
    padding: 20,
    textAlign: "justify",
    
    backgroundColor: "#FFFFFF99",
    margin: 10,
    paddingBottom: Platform.OS === "android" ? 0 : 20,
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    marginTop: 45,
  },
  skillsContainer: {
    justifyContent: "center",
    alignContent: "center",
    margin: 10,
    padding: 5,
    backgroundColor: "#FFFFFF99",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
export default WelcomeScreen;
