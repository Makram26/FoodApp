import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OrderItem from './OrderItem'

import LottieView from 'lottie-react-native'

import AsyncStorage from "@react-native-async-storage/async-storage"

import CrossIcon from 'react-native-vector-icons/Entypo'


// import * as firebase from "firebase";
// import * as firebase from "firebase/app";
// import "firebase/firestore";

// import db from '../../Utils/firebase';

import firebaseApp from '../../Utils/firebase'


// console.log("akrma",db)

// import firebase from '../../Utils/firebase'
// import "firebase/firestore";

export default function ViewCart({ navigation }) {


    // console.log("fdfkjl",firebaseApp)
    const dispatch = useDispatch()

    const [modalVisible, setModalVisible] = useState(false)
    const [loading, setLoading] = useState(false)
    const [accountInfoModal, setAccountInfoModal] = useState(false)
    const [uid, setUid] = useState(null)
    const { items, restaurantName } = useSelector((state) => state.cartReducer.selectedItems)


    // ['$13.50']
    // '13.50'
    //Number('13.50') > 13.50
    // [13.5,20.5,19.45]
    //reduce => [13.5,20.5,19.5]
    // reduce => [13.5 + 20.5 + 19.5] => 43.5

    const totol = items.map((item) => Number(item.price.replace("$", ""))).reduce((prev, curr) => prev + curr, 0)



    const totalUSD = totol.toLocaleString("en", {
        style: "currency",
        currency: "USD"
    })

    // console.log("total",totol)
    // console.log("totalUSD",totalUSD)



    const addOrderToFirebase = async () => {
        const db = firebaseApp.firestore()
        
        setLoading(true)
        db.collection("orders").add({
            items: items,
            restaurantName: restaurantName,
            uid:uid,
            createdAt: new Date()
        })
            .then(() => {
                setModalVisible(false)
                dispatch({
                    type: "REMOVE_TO_CART",
                })
                setTimeout(() => {
                    setLoading(false)
                    navigation.navigate("OrderCompleted", { restaurantName: restaurantName, totalUSD: totalUSD })
                }, 3000);
            })


    }


    const styles = StyleSheet.create({
        modalContainer: {
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "rgba(0,0,0,0.7)"
        },

        modalCheckoutContainer: {
            backgroundColor: "white",
            padding: 16,
            height: 500,
            borderWidth: 1
        },

        restaurantName: {
            textAlign: "center",
            fontWeight: "600",
            fontSize: 18,
            marginBottom: 10
        },

        subtotaContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15
        },

        subtotalText: {
            textAlign: "left",
            fontWeight: "600",
            fontSize: 15,
            marginBottom: 10
        },
        heading: {
            fontSize: 22,
            fontWeight: "700",
            textAlign: "center",
            padding: 15
        },
        textStyle: {
            fontSize: 14,
            fontWeight: "400",
            color: "#6f706f",
            lineHeight: 20,
            padding: 2
        }
    })


    const checkoutModalContent = () => {
        return (
            // <View style={{flex:1,justifyContent:"center",alignItems:"center",marginTop:13}}>
            //     <View style={{ backgroundColor: "black", padding: 10, borderRadius: 30, width: 150, alignItems: "center" }}>
            //     <TouchableOpacity onPress={() => setModalVisible(false)}>
            //         <Text style={{ color: "white" }}>CheckOut</Text>
            //     </TouchableOpacity>
            // </View>

            // </View>


            <>
                <View style={styles.modalContainer}>

                    <View style={styles.modalCheckoutContainer}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                            <View style={{ width: "90%" }}>
                                <Text style={styles.restaurantName}>{restaurantName}</Text>
                            </View>

                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <CrossIcon name='cross' size={25} color="#000000" style={{}} />

                            </TouchableOpacity>
                        </View>



                        {
                            items.map((item, index) => (
                                <OrderItem key={index} item={item} />
                            ))
                        }

                        <View style={styles.subtotaContainer}>
                            <Text style={styles.subtotalText}>SubTotal</Text>
                            <Text>{totalUSD}</Text>
                        </View>


                        <View style={{ flexDirection: "row", justifyContent: "center" }}>
                            <TouchableOpacity onPress={() => addOrderToFirebase()}
                                style={{ marginTop: 20, backgroundColor: "black", alignItems: "center", padding: 13, borderRadius: 30, width: 300, position: "relative" }}>
                                <Text style={{ color: "white", fontSize: 20 }}>CheckOut</Text>

                                <Text style={{ position: "absolute", color: "white", right: 20, top: 17, fontSize: 15 }}>{totol ? totalUSD : ""}</Text>

                            </TouchableOpacity>
                        </View>

                    </View>

                </View>
            </>



        )
    }

    const RegisterModalInfo = () => {
        return (
            <>
                <View style={styles.modalContainer}>

                    <View style={styles.modalCheckoutContainer}>
                        <TouchableOpacity onPress={() => setAccountInfoModal(false)}>
                            <CrossIcon name='cross' size={25} color="#000000" style={{ textAlign: "right" }} />
                        </TouchableOpacity>
                        <Text style={styles.heading}>Let's get you an account first 🙌</Text>
                        <Text style={styles.textStyle}>Please sign up or log in to continue. We have thousands of fresh foods, just waiting for you!</Text>
                        <TouchableOpacity onPress={() => { setAccountInfoModal(false), navigation.navigate("SignUp") }}
                            style={{ marginTop: 50, backgroundColor: "#FD3535", paddingVertical: 15, width: "100%", alignItems: "center", borderRadius: 30 }}>
                            <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight: "800" }}>Sign Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setAccountInfoModal(false), navigation.navigate("Login") }} >
                            <Text style={{ textAlign: "center", paddingVertical: 30, fontSize: 16, fontWeight: "600" }}>Already have an account?
                                <Text style={{ color: "#FD3535" }}> Log in</Text>
                            </Text>
                        </TouchableOpacity>



                    </View>

                </View>

            </>
        )
    }



    useEffect(() => {
        async function getSessionData() {
            try {
                const tempUid = await AsyncStorage.getItem("uid")
                setUid(tempUid)
            } catch (error) {

            }
        }
        getSessionData()
    }, [])

    console.log("uid", uid)
    return (
        <>
            {
                uid ?
                    <Modal animationType="slide" visible={modalVisible}
                        transparent={true}
                        onRequestClose={() => setModalVisible(false)}

                    >

                        {checkoutModalContent()}
                    </Modal>
                    :
                    <Modal animationType="slide" visible={accountInfoModal}
                        transparent={true}
                        onRequestClose={() => setAccountInfoModal(false)}

                    >

                        {RegisterModalInfo()}
                    </Modal>
            }



            {
                totol ? (
                    <View style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                        position: "absolute",
                        bottom: 20,
                        zIndex: 999
                    }}>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            width: "100%"
                        }}
                        >
                            <TouchableOpacity style={{

                                marginTop: 20,
                                backgroundColor: "black",
                                flexDirection: "row",
                                // justifyContent:"center",
                                // alignItems: "center",
                                padding: 15,
                                borderRadius: 30,
                                width: 300,
                                position: "relative"
                            }}

                                onPress={() =>
                                    {setModalVisible(true),
                                    setAccountInfoModal(true)}

                                }
                            >

                                <Text style={{ color: "white", fontSize: 20, width: "65%", textAlign: "right" }}>View Cart</Text>


                                <Text style={{ color: "white", fontSize: 20, marginLeft: 20, width: "30%", textAlign: "right" }}>{totalUSD}</Text>



                            </TouchableOpacity>
                        </View>
                    </View>
                )
                    :
                    (
                        <>
                        </>
                    )
            }
            {loading ? (
                <View style={{
                    backgroundColor: "black",
                    position: "absolute",
                    opacity: 0.6,
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%"
                    // flex:1
                }}

                >


                    <LottieView
                        style={{ width: "70%",top:20 }}
                        source={require("../../assets/animations/scanner.json")}
                        autoPlay
                        speed={2}
                    />



                </View>
            ) : (
                <></>
            )

            }

        </>


    )
}