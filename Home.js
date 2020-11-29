
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Components/Login'
import Header from './Components/Header'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useSafeArea } from 'react-native-safe-area-context';

  
export default function Home({navigation}) {

    function onLoginPressed(){
        console.log('Pressed')
        
        navigation.navigate('Menu',{screen:'Services'})
    }
  return (
    <SafeAreaView style = {styles.safarea}>
    <View style= {styles.container}>
     <Header visibility = {false}/>
     <Login loginhandler = {onLoginPressed}/>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safarea: {
    flex: 1, 
    
  },
  container:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'#969696'
  }
  
});
