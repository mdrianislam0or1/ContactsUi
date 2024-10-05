import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { fontFamily } from '../constants/fonts';
import { colors } from '../constants/colors';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = (  ) => {

  const navigation = useNavigation(); 

  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.topBackground}>
        <Image source={require('../assets/header.png')} style={styles.topBackgroundImage} />
      </View>

      <View style={styles.loginContainer}>
        <Text style={styles.loginTitle}>Log in to your account</Text>
        <View>
          <Text style={styles.email}>Email address</Text>
          <TextInput
            style={styles.input}
            placeholder=""
            keyboardType="email-address"
          />
        </View>

        <Text style={styles.password}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder=""
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
            style={styles.eyeIconContainer}
          >
            <Image source={require('../assets/eye.png')} style={styles.eyeIcon} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginButton} 
        onPress={() => navigation.navigate('ContactsScreen')}
        >
          <Text style={styles.loginButtonText}>Log in</Text>
        </TouchableOpacity>

        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>Or, Log in with</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.socialLoginContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../assets/google.png')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../assets/facebook.png')} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
  },
  topBackground: {
    height: '35%',
    backgroundColor: colors.Primary,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBackgroundImage: {
    width: '100%',
    height: '100%',
    objectFit: 'center',
  },
  loginContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.White,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    marginTop: -30,
  },
  loginTitle: {
    fontSize: 24,
    fontFamily: fontFamily.SoraExtra,
    lineHeight: 31.2,
    marginBottom: 20,
    color: colors.Black,
  },
  email: {
    fontSize: 14,
    lineHeight: 22.4,
    marginBottom: 4,
    fontFamily: fontFamily.InterMedium,
    color: colors.Black,
  },
  password: {
    fontSize: 14,
    lineHeight: 22.4,
    marginBottom: 4,
    fontFamily: fontFamily.InterMedium,
    color: colors.Black,
  },
  input: {
    backgroundColor: colors.White,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 9,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: colors.GreyThree,
    width: '100%',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 15,
    top: 13,
  },
  eyeIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  loginButton: {
    backgroundColor: colors.Primary,
    borderRadius: 32,
    paddingVertical: 15,
    alignItems: 'center',
    marginVertical: 20,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 16,
    lineHeight: 19.2,
    fontFamily: fontFamily.InterBold,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    width: "70%",
    alignSelf: 'center',
  },
  line: {
    flex: 1,
    height: 0.5,
    backgroundColor: colors.CenterAlignment,
  },
  orText: {
    textAlign: 'center',
    color: colors.OrText,
    fontSize: 14,
    lineHeight: 20,
    fontFamily: fontFamily.InterRegular,
    marginHorizontal: 10,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  socialButton: {
    backgroundColor: colors.White,
    borderRadius: 14,
    borderWidth: 1.3,
    borderColor: colors.InnerAlignment,
    padding: 10,
    width: '47%',
    paddingHorizontal: 24,
    paddingVertical: 16,
    alignItems: 'center',
  },
  socialIcon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
});

export default LoginScreen;