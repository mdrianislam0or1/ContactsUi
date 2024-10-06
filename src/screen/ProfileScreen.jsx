import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { fontFamily } from '../constants/fonts';
import { colors } from '../constants/colors';

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
          <Image source={require('../assets/Arrow-Left.png')} style={styles.arrowLeftIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
          <Image source={require('../assets/Trash.png')} style={styles.trashIcon} />
          <Text style={styles.deleteText}>Delete</Text>
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
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => navigation.navigate('CallLogScreen')}
        >
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
          <Text style={styles.infoLabelEmail}>Email</Text>
          <Text style={styles.infoText}>jane.doe@gmail.com</Text>
        </View>
        <View style={styles.contactInfo}>
          <Text style={styles.infoLabelPhone}>Phone</Text>
          <Text style={styles.infoText}>555-1234</Text>
        </View>
        <View style={styles.contactInfoDate}>
          <Text style={styles.infoLabelDate}>Date Created</Text>
          <Text style={styles.infoText}>25 March, 2024</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    alignItems: 'center',
  },
  arrowLeftIcon: {
    width: 24,
    height: 24,
  },
  trashIcon: {
    width: 20,
    height: 20,
  },
  deleteButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteText: {
    color: colors.Primary,
    fontFamily: fontFamily.InterBold,
    fontSize: 15,
    lineHeight: 18,
    marginLeft: 5,
  },
  avatarContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 50,
    backgroundColor: colors.SecondaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: colors.SecondaryDark,
    fontSize: 31.5,
    lineHeight: 50.4,
    fontFamily: fontFamily.InterBold,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: fontFamily.SoraBold,
    marginTop: 10,
    lineHeight: 28,
    textAlign: 'center',
    color: colors.TextPrimary,

  },
  jobTitle: {
    fontSize: 16,
    fontFamily: fontFamily.SoraRegular,
    color: colors.TextSecondary,
    lineHeight: 22.4,
    textAlign: 'center',
  },
  company: {
    fontSize: 16,
    color: colors.TextPrimary,
    lineHeight: 22.4,
    textAlign: 'center',
    fontFamily: fontFamily.SoraBold
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  downloadIcon: {
    width: 18,
    height: 18,
  },
  shareIcon: {
    width: 18,
    height: 18,
  },
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: colors.GreyFour,
    borderRadius: 50,
    flex: 1,
    marginRight: 10,
  },
  saveButtonText: {
    color: colors.Black,
    fontSize: 15,
    lineHeight: 18,
    marginLeft: 10,
    fontFamily: fontFamily.InterBold
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: colors.Black,
    borderRadius: 50,
    flex: 1,
    marginLeft: 10,
  },
  shareButtonText: {
    color: colors.White,
    fontSize: 15,
    lineHeight: 18,
    fontFamily: fontFamily.InterBold,
    marginLeft: 10,
  },
  contactInfoContainer: {
    marginTop: 30,
    borderRadius: 10,
    backgroundColor: colors.White,
    borderWidth: 1,
    borderColor: colors.GreyFour,
  },
  contactInfo: {
    borderBottomWidth: 1,
    borderBottomColor: colors.GreyFour,
    paddingBottom: 10,
  },
  contactInfoDate: {
    paddingBottom: 10,
  },
  infoLabelEmail: {
    fontSize: 12,
    color: colors.GreyOne,
    fontFamily: fontFamily.InterMedium,
    lineHeight: 19.2,
    paddingLeft: 16,
    paddingTop: 14
  },
  infoLabelPhone: {
    fontSize: 12,
    color: colors.GreyOne,
    fontFamily: fontFamily.InterMedium,
    lineHeight: 19.2,
    paddingLeft: 16,
    paddingTop: 14
  },
  infoLabelDate: {
    fontSize: 12,
    color: colors.GreyOne,
    fontFamily: fontFamily.InterMedium,
    lineHeight: 19.2,
    paddingLeft: 16,
    paddingTop: 14
  },
  infoText: {
    marginTop: 5,
    color: colors.Black,
    lineHeight: 22.4,
    fontSize: 14,
    fontFamily: fontFamily.InterRegular,
    paddingLeft: 16
  },
});

export default ProfileScreen;