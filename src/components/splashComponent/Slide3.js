import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import CustomBtn from './CustomBtn'

import LottieView from 'lottie-react-native'



const Slide3 = ({navigation,...props}) => {
    return (
        <>
            <View style={{ flex: 0.935, }}>
                <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
                    <LottieView
                        style={{ width:"100%" }}
                        source={require("../../assets/animations/good_services.json")}
                        autoPlay
                        speed={0.3}
                        loop={true}
                    />
                </View>
                <View style={{ flex: 1, alignItems: "center", padding: 20, }}>
                    <Text style={styles.heading}>Good Service</Text>
                    <Text style={styles.textStyle}>With our streamlined delivery process, your culinary desires are just a few clicks away.</Text>
                    <TouchableOpacity  onPress={()=> navigation.navigate("Home")}
                    style={{ marginTop: 50,backgroundColor:"#FD3535",paddingVertical:15,width:"100%",alignItems:"center",borderRadius:30 }}>
                        <Text style={{color:"#FFFFFF",fontSize:20,fontWeight:"800"}}>Get Started Now</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={{ flex: 0.075 }}>
                {<CustomBtn
                    currentIndex={props.currentIndex}
                    handleNextButtonPress={props.handleNextButtonPress}
                    handlePrevButtonPress={props.handlePrevButtonPress}
                />}
            </View>
        </>
    )
}

export default Slide3

const styles = StyleSheet.create({
    heading: {
        color: "#000000",
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 20,
    },
    textStyle: {
        color: "#6f706f",
        fontSize: 15,
        fontWeight: "400",
        textAlign: "center",
        lineHeight: 25
    }
})