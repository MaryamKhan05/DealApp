import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './styles';
import AppImages from '../../assets/images';
import Colors from '../../services/constants/colors'
import { responsiveFontSize } from 'react-native-responsive-dimensions';
const InviteCard = ({ data }) => {
    return (
        <ImageBackground source={AppImages.inviteCardBackground} imageStyle={styles.backImageStyle}>
            <View style={styles.container}>
                <View style={styles.detailsContainer} >
                    <Text style={styles.headerText}>
                        Invite Your Friends
                    </Text>
                    <Text style={styles.seeAllText}>
                        Get $20 OFF Coupon
                    </Text>
                    <TouchableOpacity style={styles.inviteButton}>
                        <Text style={styles.inviteText}>
                            Invite
                        </Text>
                    </TouchableOpacity>
                </View>
                <Image source={AppImages.inviteCardImage} style={styles.image} />
            </View>
        </ImageBackground>
    );
};


export default InviteCard;
