import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Background from "../layouts/Background";
import { ScrollView } from "react-native-gesture-handler";

const HobbiesScreen = () => {
  return (
    <Background>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.heading}>Travel</Text>
        <Image style={styles.photo} source={require("../assets/travel.jpg")} />
        <Text style={styles.textContent}>
          I love travelling around the world and visiting new places where I can
          learn from their culture, their history,
          their food as well as their people, making an unforgettable experience.
        </Text>

        <Text style={styles.heading}>Nature</Text>
        <Image style={styles.photo} source={require("../assets/hiking.jpg")} />
        <Text style={styles.textContent}>
          I have always tried to stay connected with nature by going camping,
          hiking or any sport that I can practice in the outdoors.
        </Text>

        <Text style={styles.heading}>Coding</Text>
        <Image style={styles.photo} source={require("../assets/coding.jpg")} />
        <Text style={styles.textContent}>
          The last and by no means least important, I love coding and before I started
          coding I used to love changing programs and finding new ways of doing
          things on the computer like experiment with a new OS or trying to
          change an open source program.
        </Text>
      </ScrollView>
    </Background>
  );
};

const styles = StyleSheet.create({
  textContent: {
    color: "#333333",
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 25,
    padding: 20,
    textAlign: "justify",
    backgroundColor: "#FFFFFF99",
    flex: 1,
    flexWrap: "wrap",
    margin: 10,
  },
  photo: {
    width: 300,
    height: 200,
    resizeMode: "contain",
    flex: 1,
    marginBottom: 10,
    borderWidth: 5,
    borderColor: "#FFFFFF99",
  },
  heading: {
    color: "#000000",
    fontSize: 25,
    lineHeight: 55,
    fontWeight: "bold",
    textAlign: "center",
    opacity: 1,
    
  },
  scroll: {
    marginTop: 50,
  },
  scrollContent: {
    paddingBottom: 40,
    alignItems: "center",
  },
});

export default HobbiesScreen;
