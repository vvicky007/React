import { createDrawerNavigator , DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React , {useState} from 'react';
import Services from './Components/Services'
import Menu from './Menu'
import { StyleSheet } from 'react-native';
import MyTickets from './Components/services/MyTickets'
const Drawer = createDrawerNavigator();
export default function DrawerMenu(){
    return (
    
     <Drawer.Navigator drawerPosition = "right" initialRouteName = "Menu"   drawerStyle={styles.drawer}>
      <Drawer.Screen name="Menu" component={Menu} />
      <Drawer.Screen name="Profile" component={Menu} />
      <Drawer.Screen name="Tickets" component={MyTickets} />
      <Drawer.Screen name="Services" component={Services} />
    </Drawer.Navigator>
   
    )
}

const styles = StyleSheet.create({
  drawer:{
  }
});