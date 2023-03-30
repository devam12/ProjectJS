import { StyleSheet, View, Text, Button ,TextInput} from 'react-native';

export const Home = (props) => {
    const name = props.route.params.name;
    return (
        <View style={styles.main}>
            <Text style={styles.modalText}>Welcome {name}</Text>
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
        color:'red',
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
