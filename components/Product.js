import { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput , Image} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from "./redux/action";


export default Product = (props) => {
    
    const item = props.item;
    const dispatch = useDispatch();

    const handleAddToCart = (item)=>{
        dispatch(addToCart(item));
    }
    return (
        <View style={styles.main}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.color}</Text>
            <Text style={styles.text}>{item.price}</Text>
            <View style={styles.imageView}><Image source={{uri:item.image}} style={styles.image}></Image></View>
            <Button title='add to cart' onPress={()=>handleAddToCart(item)}></Button>
        </View>
    )
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 20,
        borderBottomColor:'black',
        borderBottomWidth:3,
        marginBottom:20,
    },
    text: {
        fontSize:25,
        padding:1,
        textAlign:'center'
    },
    imageView:{
        height:300,
        padding:2,
    },
    image:{
        height:250,
    },
    centeredView: {
        flex: 1,
        padding: 20,
        backgroundColor: 'gray',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 30,
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