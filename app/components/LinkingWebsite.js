import React from 'react';
import { Text, TouchableOpacity, Linking, StyleSheet, Alert } from 'react-native';

const onPressFunction = () => {
    Alert.alert(
        "Are you sure?",
        "You are about to leave this app and open your default browser",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: ()=>Linking.openURL('https://arantxa8.github.io/')}
        ]
      );
};

const LinkingWebsite = () => {
    
    return(
    <TouchableOpacity style={styles.visit} onPress={()=>onPressFunction()}><Text style={styles.buttonText}>Visit my Website</Text></TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonText: {
        color: 'rgba(250,250,250,1)',
        fontWeight: '500',
        fontSize: 20,
        lineHeight: 40,
        alignItems: 'flex-start'
      },
      visit: {
        alignItems: 'center',
        backgroundColor: "#800080",
        borderRadius: 4,
        margin: 20,
      },
});

export default LinkingWebsite;