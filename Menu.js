import React, {useEffect} from 'react';
import { StyleSheet, Text, View, TouchableHighlight,TouchableOpacity } from 'react-native';
import Login from './Components/Login'
import Header from './Components/Header'
import { useFocusEffect} from '@react-navigation/native';
export default function Menu(props){
    // useEffect(()=>{
    //     props.navigation.openDrawer()
    // })
    useFocusEffect(
        React.useCallback(() => {
            console.log(props.navigation)
            props.navigation.openDrawer()

        }, [])
      );
    return (
       
        <TouchableOpacity onPress = {()=>props.navigation.openDrawer()}>
        <Text></Text>
        </TouchableOpacity>
       
        
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    button:{
        height:45,
        marginTop:10,
        borderColor:"#333",
        borderRadius:5,
        borderWidth:2,
        alignSelf:'stretch',
        alignItems:"center",
        justifyContent:'center',
        backgroundColor:'#333'
  
    },
    buttonText:{
        fontSize:20,
        fontWeight:'300',
        color:'#fff'
    },
    input:{
      borderColor:"#333",
      marginTop:10,
        borderRadius:5,
        borderWidth:1,
        height:45,
        alignSelf:"stretch",
        padding:5
        
    }
  });