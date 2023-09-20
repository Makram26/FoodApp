import { SafeAreaView, StyleSheet, Text, View, StatusBar, TouchableOpacity, TextInput, ScrollView, Platform, Alert } from 'react-native'
import React, { useState } from 'react'

import BackIcon from "react-native-vector-icons/Ionicons"
import SocialIcon from 'react-native-vector-icons/FontAwesome'
import EyeIcon from 'react-native-vector-icons/Feather'

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import firebaseApp from '../Utils/firebase'

import { storeCredential } from '../services'



const auth = getAuth()

// console.log(auth)

const SignUp = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(true)
  const [state, setState] = useState({
    username: "",
    email: "",
    mobile: "",
    password: ""
  })


  const CreateAccount = async () => {
    try {
      const res = await createUserWithEmailAndPassword(auth, state.email, state.password);
      if (res) {
        const db = firebaseApp.firestore();
        await db.collection("users")
          .add({
            name: state.username,
            email: state.email,
            uid: res.user.uid,
            mobile: state.mobile
          });
      }

      storeCredential(state.username.trim(), state.email.trim(),res.user.uid)
      navigation.navigate("Home")


    } catch (error) {
      const errorCode = error.code;
      // Show a user-friendly error message to the user.
      switch (errorCode) {
        case "auth/invalid-email":
          alert("The email address you entered is invalid.");
          break;
        case "auth/wrong-password":
          alert("The password you entered is incorrect.");
          break;
        case "auth/weak-password":
          alert("Password should be at least 6 characters.");
          break;
        case "auth/email-already-in-use":
          alert(`${state.email} email is already in use please try to Login!`);
          break;
        default:
          alert("An unexpected error occurred.");
          break;
      }
      // Alert.alert(error.code)
      console.log("error", error)
    }
  }
  // email-already-in-use

  console.log("password", state.username)
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <ScrollView style={styles.mainContainer} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <BackIcon name='chevron-back' size={30} color="#000000" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.heading}>Sign Up</Text>
        <Text style={styles.textStyle}>Name :</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder='Enter Your Name...'
            style={styles.inputText}
            value={state.username}
            onChangeText={(val) => setState({ ...state, username: val })}
          />
        </View>
        <Text style={styles.textStyle}>Email :</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder='Enter Your Email...'
            style={styles.inputText}
            value={state.email}
            onChangeText={(val) => setState({ ...state, email: val })}
          />
        </View>
        <Text style={styles.textStyle}>Mobile :</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder='Enter Your Mobile...'
            style={styles.inputText}
            value={state.mobile}
            onChangeText={(val) => setState({ ...state, mobile: val })}
          />
        </View>
        <Text style={styles.textStyle}>Password :</Text>
        <View style={{ ...styles.inputContainer, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <TextInput
            placeholder='Enter Your Password...'
            style={{ ...styles.inputText, width: "92%" }}
            value={state.password}
            onChangeText={(val) => setState({ ...state, password: val })}


            secureTextEntry={passwordVisible ? false : true}

          />
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
            {
              passwordVisible ?
                <EyeIcon name='eye' size={20} />
                :
                <EyeIcon name='eye-off' size={20} />
            }
          </TouchableOpacity>


        </View>
        <Text style={styles.warning}>At least one number and caps letter</Text>

        <TouchableOpacity style={styles.btnContainer} onPress={() => CreateAccount()}>
          <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", justifyContent: "center", }}>
          <TouchableOpacity style={styles.IconContainer}>
            <SocialIcon name='google' size={25} color={'#FFFFFF'} />
          </TouchableOpacity>
          <TouchableOpacity style={{ ...styles.IconContainer, backgroundColor: "blue" }}>
            <SocialIcon name='facebook' size={25} color={'#FFFFFF'} />
          </TouchableOpacity>
          <TouchableOpacity style={{ ...styles.IconContainer, backgroundColor: "#000000" }} >
            <SocialIcon name='apple' size={25} color={'#FFFFFF'} />

          </TouchableOpacity>

        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-end", marginRight: 15, marginTop: 20 }}>
          <Text style={{ textAlign: "right", fontSize: 15 }}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{ color: "#FD3535", fontSize: 15 }}> Sign in</Text>
          </TouchableOpacity>
        </View>

        <Text style={{ textAlign: "center", marginTop: 15, fontSize: 12, fontWeight: '500', marginBottom: 30 }}>By Signing up you agree <Text style={{ color: "#FD3535" }}>terms and conditions</Text></Text>

      </ScrollView>

    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "#eee",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  backIcon: {
    padding: 20
  },
  heading: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 60
    // letterSpacing:2
  },
  inputContainer: {

    borderWidth: 0.5,
    borderColor: "#000000",
    padding: Platform.OS === "ios" ? 12 : 7,
    margin: 15,
    marginTop: 10,
    borderRadius: 10
  },
  inputText: {
    color: "#000000",
    fontSize: 15,
    padding: 3
  },
  textStyle: {
    marginLeft: 15,
    color: "#000000",
    fontSize: 14,

  },
  warning: {
    marginLeft: 15,
    color: "#FD3535",
    fontSize: 12
  },
  btnContainer: {
    padding: 12,
    backgroundColor: "#FD3535",
    margin: 15,
    marginVertical: 50,
    alignItems: "center",
    borderRadius: 30
  },
  btnText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700"
  },

  IconContainer: {
    backgroundColor: "#FD3535",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 14,
    // padding:20,
    height: 55,
    width: 55,
    borderRadius: 55 / 2,
    marginBottom: 10
  }



})