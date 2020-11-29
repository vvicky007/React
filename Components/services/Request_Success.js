import React, {useState ,useEffect} from 'react';
import { StyleSheet, Text, View , FlatList, TextInput, TouchableHighlight, Platform ,KeyboardAvoidingView} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import  Header  from "../Header";
export default function Request_Success(props){
    return (
    
    <KeyboardAvoidingView style = {styles.safearea}>
    <SafeAreaView style = {styles.safearea}>
    <Header visibility = {false} />
    <View style = {styles.container}>
    
    <Text style = {styles.text}>Request is Successfull. You can find the info about ticket in my Tickets</Text>
    <TouchableHighlight style = {styles.button} onPress={()=>{props.navigation.navigate('Menu',{screen:'Services'})}}>
    <Text style = {styles.buttonText}>Back to Home</Text>
    </TouchableHighlight>
    </View>
    </SafeAreaView>
    </KeyboardAvoidingView>
    );

}

const styles = StyleSheet.create({
    safearea:{
        flex:1,
        backgroundColor:'#FFF',
        justifyContent:'center',
        alignContent:'center',
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        backgroundColor:'#FFF',
        marginLeft:20,
        marginRight:20,
    },
    text:{
        fontFamily:'lucida grande',
        fontSize:20
    },
    button:{
        alignSelf:'stretch',
        alignItems:'center',
        backgroundColor:'#333',
        height:50,
        marginTop:20,
        padding:10
    },
    buttonText:{
        color:'#FFF',
        textAlign:'center',
        fontSize:18
    }
})