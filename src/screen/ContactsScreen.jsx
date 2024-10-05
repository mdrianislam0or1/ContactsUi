import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import { fontFamily } from '../constants/fonts';
import { colors } from '../constants/colors';
import { useNavigation } from '@react-navigation/native';

const contacts = new Array(25).fill({
  name: 'Ashpak Tamboli',
  jobTitle: 'Full Stack Developer, Superiofcafans',
  initials: 'AT',
});

const ContactsScreen = () => {
  const navigation = useNavigation(); 

  const [searchText, setSearchText] = useState('');

  const renderContactItem = ({ item }) => (
    <View style={styles.contactItem}>
      <View style={styles.contactInfo}>
      <TouchableOpacity
       onPress={() => navigation.navigate('ProfileScreen')}
      >
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{item.initials}</Text>
        </View>
       </TouchableOpacity>
        <View>
          <Text style={styles.contactName}>{item.name}</Text>
          <Text style={styles.contactJobTitle}>{item.jobTitle}</Text>
        </View>
      </View>
      <TouchableOpacity
       onPress={() => navigation.navigate('ProfileScreen')}
      >
        <Image source={require('../assets/More.png')} style={styles.moreIcon} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Contacts</Text>
        <TouchableOpacity style={styles.logoutButton}
        onPress={() => navigation.navigate('LogInScreen')}
        >
          <Image source={require('../assets/Logout.png')} style={styles.logoutIcon} />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>Total 25 Contacts</Text>

      <View style={styles.searchContainer}>
        <Image source={require('../assets/Search.png')} style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search Contacts"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      <FlatList
        data={contacts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderContactItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  title: {
    fontFamily: fontFamily.SoraExtra,
    fontSize: 24,
    lineHeight: 31.2,
    color: colors.Black,
    fontWeight: 'bold',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  logoutText: {
    color: colors.Primary,
    fontFamily: fontFamily.InterBold,
    fontSize: 15,
    lineHeight: 18,
    marginLeft: 5,
  },
  subtitle: {
    fontSize: 12,
    lineHeight: 19.2,
    fontFamily: fontFamily.InterRegular,
    color: colors.GreyOne,
    marginBottom: 10,
  },
  moreIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.GreyFive,
    borderWidth: 1,
    borderColor: colors.GreyThree,
    borderRadius: 10,
    paddingRight: 4,
    paddingLeft: 14,
    marginBottom: 18,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 6,
  },
  searchBar: {
    flex: 1,
    fontSize: 14,
    fontFamily: fontFamily.InterRegular,
    lineHeight: 22.4,
  },
  contactItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.SecondaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  avatarText: {
    color: colors.SecondaryDark,
    fontFamily: fontFamily.InterBold,
    fontSize: 14,
    lineHeight: 22.4,
    textAlign: 'center',
  },
  contactName: {
    fontSize: 16,
    fontFamily: fontFamily.SoraBold,
    lineHeight: 23.2,
    color: colors.Black,
  },
  contactJobTitle: {
    fontSize: 12,
    fontFamily:fontFamily.InterRegular,
    lineHeight: 19.2,
    color: colors.GreyOne,
  },
});

export default ContactsScreen;