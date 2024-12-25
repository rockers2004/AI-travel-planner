import { View, Text, Image, StyleSheet, } from 'react-native'
import React from 'react'
import Img from './../assets/images/Login.jpeg'
import { Colors } from '@/constants/Colors'

export default function Login() {
  return (
    <View>
      <Image source={Img}
        style={{
            width:'100%',
            height:450
        }}
     />

     <View style={styles.container }>
        <Text style={{
            fontSize :30,
            fontFamily:'outfit-bold',
            textAlign:'center'
        }}
        >AI Travel Planner</Text>
        <Text style={{
          fontFamily:'outfit',
          fontSize:17,
          textAlign:'center',
          color:Colors.GRAY
        }}>Discover your next adventure effortessly. Personlaized itineraries at your fingertips. Travel smarter with AI-driven insights</Text>
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:Colors.WHITE,
        marginTop:-20,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        height:'100%',
        padding:15
    }
})