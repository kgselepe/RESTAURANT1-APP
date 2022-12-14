import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Menu from './components/Menu';
import CompleteOrder from './components/CompleteOrder';
import Form from './components/Form';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';



import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>

      <NavigationContainer>

      <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn} />    
      <Stack.Screen name="SignUp" component={SignUp} /> 
      <Stack.Screen name="Home" component={Home} />  
      <Stack.Screen name="Menu" component={Menu} /> 
      <Stack.Screen name="Form" component={Form} />
      <Stack.Screen name="CompleteOrder" component={CompleteOrder} /> 


</Stack.Navigator>
  
</NavigationContainer>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },


 
});
