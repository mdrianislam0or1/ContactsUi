import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';

const contacts = new Array(10).fill({
  name: 'Ashpak Tamboli',
  jobTitle: 'Full Stack Developer, Superiofcafans',
  initials: 'AT',
});

const ContactsScreen = () => {
  const [searchText, setSearchText] = useState('');

  const renderContactItem = ({ item }) => (
    <View style={styles.contactItem}>
      <View style={styles.contactInfo}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{item.initials}</Text>
        </View>
        <View>
          <Text style={styles.contactName}>{item.name}</Text>
          <Text style={styles.contactJobTitle}>{item.jobTitle}</Text>
        </View>
      </View>
      <TouchableOpacity>

      <Image source={require('../assets/More.png')} style={styles.moreIcon} />


      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
    
      <View style={styles.header}>
        <Text style={styles.title}>Contacts</Text>
        <TouchableOpacity style={styles.logoutButton}>
        <Image source={require('../assets/Logout.png')} style={styles.logoutIcon} />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>Total 25 Contacts</Text>

    
      <TextInput
        style={styles.searchBar}
        placeholder="Search Contacts"
        value={searchText}
        onChangeText={setSearchText}
      />

     
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
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutIcon:{
    width:24,
    height:24,
    resizeMode:'contain',
  },

  logoutText: {
    color: '#FF4A00',
    fontSize: 16,
    marginLeft: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#A0A0A0',
    marginVertical: 10,
  },
  moreIcon:{
    width:24,
    height:24,
    resizeMode:'contain',
  },
  searchBar: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
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
    backgroundColor: '#F8E71C',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  avatarText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactJobTitle: {
    fontSize: 14,
    color: '#A0A0A0',
  },
});

export default ContactsScreen;
