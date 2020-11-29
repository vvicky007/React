import React, {useState ,useEffect} from 'react';
import { StyleSheet, Text, View , FlatList, TextInput, TouchableHighlight, Platform ,KeyboardAvoidingView} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
export default function Ticket(props){
    function tickethandler(){
        console.log('Ticket is clicked'+props.id)
        if(props.status == 'Closed'){
            props.nav.navigate('Closed')
        }
        if (props.status =='Wait for User'){
            props.nav.navigate('Wait for User')
        }
    }
    return (
        <View style = {styles.container}>
            <TouchableHighlight style = {styles.button} onPress = {tickethandler}>
            <View style = {styles.textgroup}>
                <Text style = {styles.buttonText}>Ticket ID: {props.id}</Text>
                <Text style = {styles.buttonText}>Status : {props.status}</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        marginLeft:15,
        marginRight:15
    },
    button:{
        alignSelf:'stretch',
        padding:10,
        marginTop:20,
        justifyContent:'center',
        alignContent:'center',
        backgroundColor:'#333',
        height:65
    },
    buttonText:{
        fontSize:15,
        color:'#FFF',
    },
    textgroup:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center',
        padding:10,
       
    }
}) 