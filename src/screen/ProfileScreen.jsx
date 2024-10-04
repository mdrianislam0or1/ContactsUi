/* eslint-disable no-dupe-keys */
/* eslint-disable quotes */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const handleDelete = () => {
    Alert.alert('Delete', 'Are you sure you want to delete this contact?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive' },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={styles.arrowLeft}>
        <Image source={require('../assets/Arrow-Left.png')} style={styles.arrowLeftIcon} />
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDelete}>
            <View style={styles.actionButtons}>
            <Image source={require('../assets/Trash.png')} style={styles.trashIcon} />
            <Text style={styles.trashText}>Delete</Text>
            </View>
        </TouchableOpacity>
      </View>

      <View style={styles.avatarContainer}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>BW</Text>
        </View>
        <Text style={styles.name}>Ashpak Tamboli</Text>
        <Text style={styles.jobTitle}>Full Stack Developer</Text>
        <Text style={styles.company}>Super Local Fans</Text>
      </View>

      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.saveButton}>
        <Image source={require('../assets/Download.png')} style={styles.downloadIcon} />
          <Text style={styles.saveButtonText}>Save to phone</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareButton}>
        <Image source={require('../assets/Share.png')} style={styles.shareIcon} />
          <Text style={styles.shareButtonText}>Share contact</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contactInfoContainer}>
        <View style={styles.contactInfo}>
          <Text style={styles.infoLabel}>Email</Text>
          <Text style={styles.infoText}>jane.doe@gmail.com</Text>
        </View>
        <View style={styles.contactInfo}>
          <Text style={styles.infoLabel}>Phone</Text>
          <Text style={styles.infoText}>555-1234</Text>
        </View>
        <View style={styles.contactInfo}>
          <Text style={styles.infoLabel}>Date Created</Text>
          <Text style={styles.infoText}>25 March, 2024</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  arrowLeft:{
    paddingVertical: 20,
  },
  arrowLeftIcon:{
    width:24,
    height: 24,
  },
  actionButtons:{
    flexDirection: 'row',
    justifyContent:'space-between',

  },
trashIcon:{
    width: 24,
    height: 24,
  },
  trashText:{
    color: "#FB5200",
    paddingHorizontal: 6,
    paddingVertical:3
},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  avatarContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#F8E71C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#000',
    fontSize: 28,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  jobTitle: {
    fontSize: 16,
    color: '#A0A0A0',
  },
  company: {
    fontSize: 16,
    color: '#A0A0A0',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  downloadIcon:{
    width: 24,
    height: 24,
  },
  shareIcon:{
    width: 24,
    height: 24,
  },
  saveButton: {
   

    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  saveButtonText: {
    color: '#000',
    marginLeft: 10,
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  shareButtonText: {
    color: '#fff',
    marginLeft: 10,
  },
  contactInfoContainer: {
    marginTop: 30,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
  },
  contactInfo: {
    marginBottom: 15,
  },
  infoLabel: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
  infoText: {
    marginTop: 5,
    color: '#A0A0A0',
    fontSize: 14,
  },
});

export default ProfileScreen;
