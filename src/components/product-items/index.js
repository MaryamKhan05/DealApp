import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './styles';
import AppImages from '../../assets/images';
import Colors from '../../services/constants/colors'
import { responsiveFontSize } from 'react-native-responsive-dimensions';
const ProductItems = ({ data }) => {
    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={styles.container}>
                <Image source={AppImages.storeItem1} style={styles.image} />
                <View style={styles.detailsContainer} >
                    <View style={styles.row}>
                        <Text style={styles.headerText}>
                            Milk Pak
                        </Text>
                        <TouchableOpacity style={styles.heartIcon} >
                            <Icon type='entypo' name='heart' size={responsiveFontSize(2)} color={item?.selected == true ? Colors.red : Colors.grey} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.seeAllText}>
                            Walmart
                        </Text>
                        <View style={styles.priceContainer} >
                            <Text style={styles.discountedPriceText}>
                                $ 20
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.flatListContainer} >
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={renderItem}
            />
        </View>
    );
};


export default ProductItems;
