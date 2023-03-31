import { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { addToCart } from "./redux/action";


export default Product = (props) => {

    const item = props.item;
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    }
    return (
        <View style={styles.main}>
            <View style={styles.oneItem}>
                <View style={[styles.imageView, { flex: 1 }]}><Image source={{ uri: item.image }} style={styles.image}></Image></View>
                <View style={[styles.rightText, { flex: 1 }]}><Text style={styles.text}>{item.name}</Text>
                    <Text style={styles.text}>{item.color}</Text>
                    <Text style={styles.text}>{item.price}</Text>
                </View>
            </View>
            <Button style={styles.button} title='add to cart' onPress={() => handleAddToCart(item)}></Button>
        </View >
    )
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        margin: 20,
        padding: 20,
        borderBottomColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        flexDirection: 'column'
    },
    oneItem: {
        flexDirection: 'row',
    },
    imageView: {
        flex: 1,
        justifyContent: 'flex-start',
        margin: 5,
    },
    image: {
        height: 100,
        width: 100,
        marginBottom:15,
    },
    rightText: {
        alignItems:'flex-start',
        flex: 1,
        fontSize: 25,
    },
    text:{
        padding:3,
        textTransform: 'capitalize',
    },
    button: {
        padding: 10,
    },
   
})