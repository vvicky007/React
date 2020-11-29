import React, {useState ,useEffect} from 'react';
import { StyleSheet, Text, View , FlatList, TextInput, TouchableHighlight, Platform ,KeyboardAvoidingView} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
export default function Closed(props){
   
    return (
        <View style = {styles.container}>
            <Text style = {styles.buttonText}>Ticket is Closed</Text>
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
   
    buttonText:{
        fontSize:20,
       
    }
}) 