import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import CustomBtn from './CustomBtn'

const Slide1 = (props) => {
   
    return (
        <>
            <View style={{ flex: 0.935, }}>
               <View style={{flex:2,justifyContent:"center",alignItems:"center"}}>
                 <Image source={require("../../assets/images/slad1.webp")} style={{width:"98%",}}  />
               </View>
               <View style={{flex:1,alignItems:"center",padding:20}}>
                  <Text style={styles.heading}>Fresh Food Order</Text>
                  <Text style={styles.textStyle}>Prepare to be dazzied by the symphony of flavors that dance upon your palate.</Text>
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

export default Slide1

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
        lineHeight:20
        // letterSpacing:0.024
    }
})