import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const BottomTabs = ({ navigation, ...props }) => {
  let activeColor = "#000000"
  let noActiveColor = "#807d7d"
  console.log(props.currectScreen)
  return (
    <View style={{
      flexDirection: "row",
      marginRight: 10,
      marginHorizontal: 30,
      justifyContent: "space-between",
      marginTop: 10,
      marginBottom:10
    }}>
      <Icon icon="home" name="Home" color={props.currectScreen == "Home" ? activeColor : noActiveColor} navigation={navigation} />
      <Icon icon="search" name="Browse" color={props.currectScreen == "Browse" ? activeColor : noActiveColor} navigation={navigation} />
      <Icon icon="shopping-bag" name="Grocery" color={props.currectScreen == "Grocery" ? activeColor : noActiveColor} navigation={navigation} />
      <Icon icon="receipt" name="Orders" color={props.currectScreen == "Orders" ? activeColor : noActiveColor} navigation={navigation} />
      <Icon icon="user" name="Account" color={props.currectScreen == "Account" ? activeColor : noActiveColor} navigation={navigation} />
    </View>
  )
}

export default BottomTabs

const Icon = (props) => (
  <TouchableOpacity onPress={() => props.navigation.navigate(props.name)}>
    <View>

      <FontAwesome5
        name={props.icon}
        size={25}
        color={props.color}
        style={{
          marginBottom: 3, alignSelf: "center"
        }} />
      <Text style={{ color: props.color }}>{props.name}</Text>
    </View>
  </TouchableOpacity>



)

const styles = StyleSheet.create({

})