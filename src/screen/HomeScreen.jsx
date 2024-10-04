import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text>HomeScreen</Text>
            <Button
                title="Go to LogInScreen"
                onPress={() => navigation.navigate('LogInScreen')}
            />

            <Button
                title="Go to Contacts"
                onPress={() => navigation.navigate('ContactsScreen')}
            />
            <Button
                title="Go to ProfileScreen"
                onPress={() => navigation.navigate('ProfileScreen')}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})