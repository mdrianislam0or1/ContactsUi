/* eslint-disable quotes */
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './src/screen/LoginScreen'
import ContactsScreen from './src/screen/ContactsScreen'
import ProfileScreen from './src/screen/ProfileScreen'
import CallLogScreen from './src/screen/CallLogScreen'

const App = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
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
        <Stack.Screen
          name={"CallLogScreen"}
          component={CallLogScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

