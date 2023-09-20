import { SafeAreaView, StyleSheet, Text, View, StatusBar, TouchableOpacity, TextInput, ScrollView,Platform } from 'react-native'
import React, { useState } from 'react'

import BackIcon from "react-native-vector-icons/Ionicons"
import SocialIcon from 'react-native-vector-icons/FontAwesome'
import EyeIcon from 'react-native-vector-icons/Feather'


const Login = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(true)
  const [state, setState] = useState({
    name: "",
    email: "",
    mobile: "",
    password: ""
  })

  console.log("password", state.password)
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <ScrollView contentContainerStyle={styles.mainContainer} showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <BackIcon name='chevron-back' size={30} color="#000000" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.heading}>Login</Text>

        <Text style={styles.textStyle}>Email :</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder='Enter Your Email...'
            style={styles.inputText}
            value={state.email}
            onChangeText={(val) => setState({ ...state, email: val })}
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


        <TouchableOpacity style={{...styles.btnContainer,marginBottom:20}}>
          <Text style={styles.btnText}>Log In</Text>
        </TouchableOpacity>
        <Text style={{ color: "red", textAlign: "right",  fontSize: 16, fontWeight: "500",marginRight:20,marginBottom:20 }}>Forgot password</Text>

        <Text style={{ textAlign: "center", fontSize: 20, marginBottom: 20, color: "#000000", fontWeight: "400" }}>or</Text>
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
        <View style={{ flexDirection: "row", justifyContent: "flex-end", marginRight: 15,marginTop:20,marginBottom:20 }}>
          <Text style={{ textAlign: "right", fontSize: 15 }}>New user ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={{ color: "#FD3535", fontSize: 15 }}> Create an account</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "#eee",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  mainContainer: {
    flexGrow: 1,
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
    padding: Platform.OS === "ios"? 12 :7,
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