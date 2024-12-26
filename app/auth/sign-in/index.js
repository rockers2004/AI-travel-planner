
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import {Colors} from './../../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';



export default function SignIn() {
    const navigation=useNavigation();
    const router=useRouter();

    useEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[])

  return (
    <View style={{
        padding:25,
        paddingTop:40,
        backgroundColor:Colors.WHITE,
        height:'100%'
    }}>
    <TouchableOpacity onPress={()=>router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
    </TouchableOpacity>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:30,
        marginTop:30
      }}>Let&apos;s Sign you In</Text>
      <Text style={{
        fontFamily:'outfit',
        fontSize:30,
        color:Colors.GRAY,
        marginTop:20
      }}>Welcome Back</Text>
      <Text style={{
        fontFamily:'outfit',
        fontSize:30,
        color:Colors.GRAY,
        marginTop:10
      }}>you&apos;ve been missed</Text>
    
        {/* Email */}
        <View style={{
            marginTop:50
        }}>
            <Text style={{
                fontFamily:'outfit'
            }}>Email</Text>
            <TextInput
            style={styles.input}
            placeholder='Enter Email'
            placeholderTextColor={Colors.GRAY}/>
        </View>

        {/* password */}
        <View style={{
            marginTop:20
        }}>
            <Text style={{
                fontFamily:'outfit'
            }}>password</Text>
            <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder='Enter Password'
            placeholderTextColor={Colors.GRAY}/>
        </View>

        {/* sigh In button */}

        <View style={{
            padding:20,
            backgroundColor:Colors.PRIMARY,
            borderRadius:15,
            marginTop:50,
        }}>
            <Text style={{
                color:Colors.WHITE,
                textAlign:'center'
            }}>Sign In</Text>
        </View>

        {/* create account button */}

        <TouchableOpacity
         onPress={()=>router.replace('auth/sign-up')}
         style={{
            padding:20,
            backgroundColor:Colors.WHITE,
            borderRadius:15,
            marginTop:20,
            borderWidth:1
        }}>
            <Text style={{
                color:Colors.PRIMARY,
                textAlign:'center'
            }}>Create Account</Text>
        </TouchableOpacity>



    </View>

    
  )
}

const styles = StyleSheet.create({
    input:{
        padding:15,
        borderWidth:1,
        borderRadius:15,
        borderColor:Colors.GRAY,
        fontFamily:'outfit'
    }
})