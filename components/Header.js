import { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { useSelector } from 'react-redux';

export default Header = () => {
    const cartItem = useSelector((state) => state)
    return (
        <View >
            <Text style={styles.addtocart}>My Cart {cartItem.reducer.length}</Text>
            {
                cartItem.reducer.length ? <View><Text>{cartItem.reducer[cartItem.reducer.length - 1].name}</Text></View> : null
            }
        </View>
    )
}


const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    addtocart: {
        marginTop: 5,
        padding: 10,
        fontSize: 20,
        backgroundColor: 'gray',
        textAlign: 'right',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    modalView: {
        backgroundColor: 'white',
        padding: 25,
        borderRadius: 20
    },
    modalText: {
        fontSize: 25,
        marginBottom: 20
    },
    modalButton: {
        margin: 25
    }
})