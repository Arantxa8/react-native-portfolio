import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  Platform,
  StatusBar,
} from "react-native";

//Style component for all the screeens
const Background = ({ children }) => {
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          style={styles.background}
          source={require("../assets/WelcomeScreenBackground.jpeg")}
          imageStyle={{ opacity: 0.5 }}
        >
          <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>
        </ImageBackground>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  safeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Background;
