
import React from 'react';
import { StyleSheet, Text, View , FlatList} from 'react-native';
import Header from './Header'
import Service from './Service'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Services(props) {
  console.log(props)
    const services = [
        {
            key:'1',
            name:'Hr Self Services'
        },
        {
            key:'2',
            name:'IT Services'
        },
        {
            key:'3',
            name:'IT Infra Supporters'
        },
        {
            key:'4',
            name:'RBEI IT Application'
        },
    ]
    
    function serviceroute(text){
      
      props.navigation.navigate(text)
    }
  return (
    <SafeAreaView style = {styles.safearea}>
    <View style = {styles.container}>
     <Header visibility = {true} nav = {props.navigation}/>
     <FlatList style = {styles.list} data={services} renderItem = {({item})=><Service onclick={serviceroute}  service = {item}/>} numColumns = {1} keyExtractor = {(item)=>item.key}/>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea:{
   flex:1
  },
  container: {
    flex:1,
    backgroundColor: '#FFF',
    justifyContent:'center',
   
  },
  list:{
      marginTop:20
  }
});
