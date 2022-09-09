import React, {}from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
const Login = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeading}>Login Form</Text>
      <Text style={styles.description}>You can reach us anytime via any@hifi.com</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.lables}>
          Enter your name
        </Text>
        <TextInput style={styles.inputStyle}
        />
        <Text style={styles.lables}>
          Enter password
        </Text>
        <TextInput style={styles.inputStyle}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: "white",
  },
  mainHeading: {
    fontSize: 25,
    fontWeight: "700",
    paddingTop: 20,
    paddingBottom: 15,
    color: "#344055",
    textTransform: "capitalize",
    fontFamily: "bold",
  },
  description: {
    fontSize: 20,
    color: "#7d7d7d",
    paddingBottom: 20,
    fontWeight: "300",
    fontFamily: "regular",
    lineHeight: 20,
  },
  inputContainer: {
    marginTop: 20,
  },
  lables: {
    fontSize: 18,
    fontFamily: "regular",
    marginBottom: 5,
    marginTop: 10,
    lineHeight: 20,
    color: "7d7d7d",
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 1,
    fontFamily: "regular",
    fontSize: 18,

  },
  wrrapor: {
  },
  wrraporText: {
    fontSize: 16,
    color: "#7d7d7d",
    paddingBottom: 20,
    fontWeight: "200",
    fontFamily: "regular",
  },
})

export default Login;