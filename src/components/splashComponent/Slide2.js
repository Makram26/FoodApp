import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

import CustomBtn from './CustomBtn'
import LottieView from 'lottie-react-native'
const Slide2 = (props) => {
    return (
        <>
            <View style={{ flex: 0.935, }}>
                <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
                 <LottieView
                 style={{ width: "100%" }}
                  source={require("../../assets/animations/fast_delivery.json")}
                  autoPlay
                  speed={1}
                  loop={true}
                 />
                </View>
                <View style={{ flex: 1, alignItems: "center", padding: 20,marginTop:-50 }}>
                    <Text style={styles.heading}>Fast Delivery</Text>
                    <Text style={styles.textStyle}>The clock was ticking, and hungry patrons eagerly awaited their meals. With dtermination in his eyes, Jake sprang into action.</Text>
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

export default Slide2

const styles = StyleSheet.create({
    heading:{
        color:"#000000",
        fontSize:20,
        fontWeight:"600",
        marginBottom:20,
    },
    textStyle:{
        color:"#6f706f",
        fontSize:15,
        fontWeight:"400",
        textAlign:"center",
        lineHeight:25
    }
})