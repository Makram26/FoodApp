import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

import CategoriesItems from '../../Utils/CategoriesItem'





const Categories = () => {
  return (

    <View style={{
      marginTop: 5,
      backgroundColor: "#FFFFFF",
      paddingVertical: 10,
      paddingLeft: 20


    }}>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

           {/* loops start here */}
        {
          CategoriesItems && CategoriesItems.map((item, index) => (
            <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
              <Image
                source={item.image}
                style={{
                  width: 50,
                  height: 40,
                  resizeMode: "contain"
                }}

              />
              <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
            </View>
          ))
        }
         {/* loops ends here */}





      </ScrollView>

    </View>



  )
}

export default Categories

const styles = StyleSheet.create({})