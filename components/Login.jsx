import { View, Text, Image, StyleSheet, TouchableOpacity, } from 'react-native'
import React from 'react'
import Img from './../assets/images/Login.jpeg'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'

export default function Login() {


    const router = useRouter();
  return (
    <View>
      <Image source={Img}
        style={{
            width:'100%',
            height:520
        }}
     />

     <View style={styles.container }>
        <Text style={{
            fontSize :30,
            fontFamily:'outfit-bold',
            textAlign:'center',
            marginTop:10
        }}
        >AI Travel Planner</Text>
        <Text style={{
          fontFamily:'outfit',
          fontSize:17,
          textAlign:'center',
          color:Colors.GRAY,
          marginTop:20
        }}>Discover your next adventure effortessly. Personlaized itineraries at your fingertips. Travel smarter with AI-driven insights</Text>
        <TouchableOpacity style={styles.button}
            onPress={()=>router.push('auth/sign-in')}
        >
            <Text style={{color:Colors.WHITE, 
              textAlign:'center',
              fontFamily:'outfit',
              fontSize: 17
              }}>Get Started</Text>
        </TouchableOpacity>
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
        padding:25
    },
    button:{
      padding:15,
      backgroundColor:Colors.PRIMARY,
      borderRadius:99,
      marginTop:'25%'
    }
})