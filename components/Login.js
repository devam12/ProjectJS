import { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

export const Login = (props) => {
    let [name, setName] = useState("");
    return (
        <View style={styles.main}>
            <TextInput placeholder='Enter name' value={name} onChangeText={(text)=>{setName(text)}}></TextInput>
            <Button title='Login' onPress={() => props.navigation.navigate("Home",name={name})}/>
        </View>
    )
}


const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    text: {
        padding: 20,
        backgroundColor: 'gray',
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 30
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