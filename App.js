import React , {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ITServices from './Components/services/ITServices'
import HrSelfServices from './Components/services/HrSelfServices';
import ITInfraSupporters from './Components/services/ITInfraSupporters';
import RBEIITApplication from './Components/services/RBEIITApplication'
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './Home';
import Services from './Components/Services'
import HardwareandDevices from './Components/services/ITServices/HardwareandDevices'
import ComputerFreezes from './Components/services/ITServices/HardwareandDevices/ComputerFreezes'
import Drawer from './Drawer'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Form from './Components/services/Form';
import Request_Success from './Components/services/Request_Success'
import Closed from './Components/Tickets/Closed'
import Open from './Components/Tickets/Open'
export default function App(props) {
  const Stack = createStackNavigator();

  return (
   <SafeAreaProvider>
    <NavigationContainer>
    <Stack.Navigator>
    
    <Stack.Screen
          name="Home"
          component={Home}
          options={
            {
              headerShown:false
            }
          }
        />
        <Stack.Screen
          name="Menu"
          component={Drawer}
          options={
            {
              headerShown:false
            }
          }
        />
         <Stack.Screen
          name="Services"
          component={Services}
          options={
            {
              headerShown:false
            }
            }
        />
         <Stack.Screen
          name="IT Services"
          component={ITServices}
          
          
        />
        <Stack.Screen
          name="Hr Self Services"
          component={HrSelfServices}
          
          
        />
         <Stack.Screen
          name="IT Infra Supporters"
          component={ITInfraSupporters}
          
          
        />
         <Stack.Screen
          name="RBEI IT Application"
          component={RBEIITApplication}
          
          
        />
        <Stack.Screen
          name="Hardware and Devices"
          component={HardwareandDevices}
          
          
        />
         <Stack.Screen
          name="Computer Freezes"
          component={ComputerFreezes}
          
          
        />
       <Stack.Screen
          name="Form"
          component={Form}
           options={
            {
              headerShown:false
            }
            }
          
        />
        
        <Stack.Screen
          name="Success"
          component={Request_Success}
          options={
            {
              headerShown:false
            }
            }
        />
        <Stack.Screen
          name="Closed"
          component={Closed}
          
          
        />
         <Stack.Screen
          name="Wait for User"
          component={Open}
          
          
        />
    </Stack.Navigator>
    
    </NavigationContainer>
     </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  Nav:{
    backgroundColor:'#333'
  }
});
