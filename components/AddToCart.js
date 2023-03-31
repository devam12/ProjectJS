import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

const AddToCart = () => {
    const cartItem = useSelector((state) => state)
    return (
        <View>
            <ScrollView>
                {
                    cartItem.reducer.length ?

                        cartItem.reducer.map((item, index) => {
                            return (

                                <View style={styles.main} key={index}>
                                    <View style={styles.oneItem}>
                                        <View style={[styles.imageView, { flex: 1 }]}><Image source={{ uri: item.image }} style={styles.image}></Image></View>
                                        <View style={[styles.rightText, { flex: 1 }]}><Text style={styles.text}>{item.name}</Text>
                                            <Text style={styles.text}>{item.color}</Text>
                                            <Text style={styles.text}>{item.price}</Text>
                                        </View>
                                    </View>
                                </View >

                            )
                        }) : <Text style={styles.rightText}>Cart is empty</Text>
                }
            </ScrollView>
        </View>
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
        marginBottom: 15,
    },
    rightText: {
        alignItems: 'center',
        textAlign : 'center',
        flex: 1,
        fontSize: 25,
    },
    text: {
        padding: 3,
        textTransform: 'capitalize',
    },
    button: {
        padding: 10,
    },

})

export default AddToCart
