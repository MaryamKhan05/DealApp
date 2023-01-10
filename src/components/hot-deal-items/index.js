import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './styles';
import AppImages from '../../assets/images';
import Colors from '../../services/constants/colors'
import { responsiveFontSize } from 'react-native-responsive-dimensions';
const HotDealItems = ({ data }) => {
    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={styles.container}>
                <Image style={styles.hotDealImage} source={AppImages.hotDealTag} />
                <TouchableOpacity style={styles.heartIcon}>
                    <Icon type='entypo' size={responsiveFontSize(2)} color={item?.selected == true ? Colors.red : Colors.grey} name='heart' />
                </TouchableOpacity>
                <Image source={AppImages.promotionItem1} style={styles.image} />
                <View style={styles.detailsContainer} >
                    <Text style={styles.headerText}>
                        Milk Pak
                    </Text>
                    <View style={styles.rowJustified} >
                        <Text style={styles.seeAllText}>
                            Start
                        </Text><Text style={styles.seeAllText}>
                            12 Nov, 22
                        </Text>
                    </View>
                    <View style={styles.rowJustified} >
                        <Text style={styles.seeAllText}>
                            End
                        </Text><Text style={styles.seeAllText}>
                            12 Nov, 22
                        </Text>
                    </View>
                    <View style={styles.row} >
                        <Text style={styles.discountedPriceText}>
                            $20
                        </Text>
                        <Text style={styles.oldPriceText}>
                            $ 50
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.flatListContainer} >
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={renderItem}
            />
        </View>
    );
};


export default HotDealItems
