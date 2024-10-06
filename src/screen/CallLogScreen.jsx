import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { fontFamily } from '../constants/fonts';
import { colors } from '../constants/colors';

const CallLogScreen = ({ navigation }) => {
    const callLogs = [
        { type: 'Incoming Call', date: 'May 18 20:20 am' },
        { type: 'Outgoing Call', date: 'May 19 20:20 am' },
        { type: 'Missed Call', date: 'May 20 20:20 am' },
        { type: 'Outgoing Call', date: 'May 21 20:20 am' },
        { type: 'Incoming Call', date: 'May 22 20:20 am' },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Image source={require('../assets/Arrow-Left.png')} style={styles.arrowLeftIcon} />
                </TouchableOpacity>
                <View style={styles.avatarContainer}>
                    <Image source={require('../assets/avatar.png')} style={styles.avatar} />
                </View>
                <Text style={styles.contactName}>Ashpak Tamboli</Text>
                <Text style={styles.contactNumber}>+555-1234</Text>
                <Text style={styles.contactVia}>Contact Via</Text>
                <View style={styles.socialIcons}>
                    <Image source={require('../assets/youtube.png')} style={styles.socialIcon} />
                    <Image source={require('../assets/phone.png')} style={styles.socialIcon} />
                    <Image source={require('../assets/instagram.png')} style={styles.socialIcon} />
                </View>
            </View>

            <Text style={styles.callLogsTitle}>Call Logs</Text>
            {callLogs.map((log, index) => (
                <View key={index} style={styles.callLogItem}>
                    <Image source={require('../assets/phone.png')} style={styles.callIcon} />
                    <View style={styles.callLogDetails}>
                        <Text style={styles.callType}>{log.type}</Text>
                        <Text style={styles.callDate}>{log.date}</Text>
                    </View>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    header: {
        alignItems: 'center',
        backgroundColor: colors.SecondaryDark,
        borderRadius: 10,
        paddingVertical: 20,
        marginBottom: 20,
    },
    backButton: {
        position: 'absolute',
        left: 20,
        top: 20,
    },
    arrowLeftIcon: {
        width: 24,
        height: 24,
    },
    avatarContainer: {
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: colors.Black,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    contactName: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: fontFamily.SoraBold,
        marginTop: 10,
        textAlign: 'center',
        color: colors.White,
    },
    contactNumber: {
        fontSize: 16,
        color: colors.White,
        fontFamily: fontFamily.SoraRegular,
        textAlign: 'center',
    },
    contactVia: {
        fontSize: 14,
        marginTop: 10,
        fontFamily: fontFamily.InterMedium,
        color: colors.White
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    socialIcon: {
        width: 24,
        height: 24,
        marginHorizontal: 5,
    },
    callLogsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: fontFamily.SoraBold,
        marginTop: 20,
        color: colors.Black,

    },
    callLogItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.GreyThree,
    },
    callIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    callLogDetails: {
        flex: 1,
    },
    callType: {
        fontSize: 16,
        fontFamily: fontFamily.InterRegular,
        color: colors.Black,

    },
    callDate: {
        fontSize: 12,
        color: colors.Black,
        fontFamily: fontFamily.InterMedium,
    },
});

export default CallLogScreen;