import { StyleSheet, Text, View,StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import BottomTabs from '../components/homeComponent/BottomTabs'
import { useRoute } from '@react-navigation/native'

const Account = ({navigation}) => {
    const route=useRoute()
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
        <View style={{flex:1,backgroundColor:"red"}}>

        </View>
      <BottomTabs currectScreen={route.name} navigation={navigation} />
    </SafeAreaView>
  )
}

export default Account

const styles = StyleSheet.create({

    AndroidSafeArea: {
        flex: 1,
        backgroundColor: "#eee",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
})