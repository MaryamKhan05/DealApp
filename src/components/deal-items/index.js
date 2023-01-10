import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './styles';
import AppImages from '../../assets/images';
import Colors from '../../services/constants/colors'
import { responsiveFontSize } from 'react-native-responsive-dimensions';
const DealItems = ({ data }) => {
    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={styles.container}>
                <TouchableOpacity style={styles.heartIcon} >
                    <Icon type='entypo' name='heart' size={responsiveFontSize(2)} color={item?.selected == true ? Colors.red : Colors.grey} />
                </TouchableOpacity>
                <Image source={AppImages.storeItem1} style={styles.image} />
                <View style={styles.detailsContainer} >
                    <Text style={styles.headerText}>
                        Milk Pak
                    </Text>
                    <Text style={styles.seeAllText}>
                        Walmart
                    </Text>
                    <View style={styles.priceContainer} >
                        <Text style={styles.discountedPriceText}>
                            $ 20
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


export default DealItems;
