import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import Background from "../layouts/Background";
import axios from "axios";


const ContactScreen = () => {
  //Passing state to react hook form
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      mobile: "",
      email: "",
      message: "",
    },
  });
  // Handle submit
  const onSubmit = (data) => {
    if (Object.keys(errors).length === 0) {
      axios
        .post("https://formspree.io/f/mzbyroqd", {
          data: {
            name: data.name,
            phone: data.mobile,
            email: data.email,
            message: data.message,
            _subject: "Form from app React Native",
          },
          headers: { "Content-type": "application/json" },
          responseType: "json",
        })
        .then((response) => {
          
          reset({ name: "", mobile: "", email: "", message: "" });
          if (response.status === 200) {
            Alert.alert(
              "Contact Form",
              "Your message has been sent successfully"
            );
          } else {
            Alert.alert(
              "Contact Form",
              "Something went wrong, please try again"
            );
          }
        })
        .catch();
    } else {
      Alert.alert("Contact Form", "Something went wrong, please try again");
    }
  };

  
  //render in screen

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.label}>Name</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              autoCorrect={false}
            />
          )}
          name="name"
          rules={{
            required: true,
            maxLength: 70,
          }}
        />
        
        {errors.name && errors.name.type === "required" && (
          <Text style={styles.validationText}>This is required.</Text>
        )}
        {errors.name && errors.name.type === "maxLength" && (
          <Text style={styles.validationText}>
            Maximum length 70 characters
          </Text>
        )}
        <Text style={styles.label}>Mobile</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name="mobile"
          rules={{
            required: true,
            pattern: /^\d+$/,
            maxLength: 13,
          }}
        />
        {errors.mobile && errors.mobile.type === "required" && (
          <Text style={styles.validationText}>This is required.</Text>
        )}
        {(errors.mobile && errors.mobile.type === "maxLength") ||
          (errors.mobile && errors.mobile.type === "pattern" && (
            <Text style={styles.validationText}>
              Please insert a valid phone number.
            </Text>
          ))}
        <Text style={styles.label}>Email</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              autoCapitalize='none'
              autoCorrect={false}
            />
          )}
          name="email"
          rules={{
            required: true,
            pattern:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          }}
        />
        {errors.email && errors.email.type === "required" && (
          <Text style={styles.validationText}>This is required.</Text>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <Text style={styles.validationText}>
            Please insert a valid email address.
          </Text>
        )}
        <Text style={styles.label}>Message</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.inputMessage}
              multiline={true}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name="message"
          rules={{ required: true }}
        />
        {errors.message && (
          <Text style={styles.validationText}>This is required.</Text>
        )}
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  label: {
    color: "#333333",
    fontWeight: "bold",
    fontSize: 20,
    margin: 15,
    marginLeft: 0,
  },
  button: {
    marginTop: 20,
    color: "white",
    height: 40,
    backgroundColor: "#80008090",
    borderRadius: 5,
    width: 180,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#333333",
    fontWeight: "bold",
    fontSize: 20,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderColor: "black",
    height: 40,
    padding: 10,
    borderRadius: 5,
    width: 300,
    color: "#333333",

    fontSize: 18,
  },
  inputMessage: {
    backgroundColor: "#FFFFFF",
    borderColor: "black",
    height: 200,
    padding: 10,
    borderRadius: 5,
    width: 300,
    color: "#333333",
    textAlignVertical: "top",
    fontSize: 18,
  },
  validationText: {
    color: "#FF0000",
  },
});

export default ContactScreen;
