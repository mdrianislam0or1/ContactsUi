import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screen/HomeScreen'
import LoginScreen from './src/screen/LoginScreen'
import ContactsScreen from './src/screen/ContactsScreen'
import ProfileScreen from './src/screen/ProfileScreen'

const App = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"HOME"}
          component={HomeScreen}
        />

        <Stack.Screen
          name={"LogInScreen"}
          component={LoginScreen}
        />
        <Stack.Screen
          name={"ContactsScreen"}
          component={ContactsScreen}
        />
        <Stack.Screen
          name={"ProfileScreen"}
          component={ProfileScreen}
        />


      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})