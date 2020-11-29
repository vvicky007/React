import React, {useState ,useEffect} from 'react';
import { StyleSheet, Text, View , FlatList, TextInput, TouchableHighlight, Platform} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ticket from './Ticket';
import Header from '../Header'
const data = [
    {
        id:'123',
        status:'Wait for User'
    },
    {
        id:'456',
        status:'Closed'
    }
];
export default function MyTickets(props){
    var [tickets,setTickets] = useState(data);
    return (
        <SafeAreaView style = {styles.safearea}>

        <Header visibility = {true} />
        <Text style = {styles.heading}>MyTickets</Text>
        <View style = {styles.container}>
        
        <FlatList style = {styles.flatlist} data = {tickets} keyExtractor = {(item)=>item.id} renderItem = {({item})=><Ticket id = {item.id} status = {item.status} nav = {props.navigation}/>} />
        </View>
        </SafeAreaView>
    );
}
const styles= StyleSheet.create({
    safearea:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        backgroundColor:'#FFF'
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FFF'
    },
    heading:{
        fontSize:20,
        textAlign:'center'
    },
    flatlist:{
        alignSelf:'stretch'
    }
})