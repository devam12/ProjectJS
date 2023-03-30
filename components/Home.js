import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button ,TextInput} from 'react-native';

export const Home = () => {
    const[data,setData] = useState({});

    const getAPI = async ()=>{
        const uri = "https://jsonplaceholder.typicode.com/posts" ;
        let response = await fetch(uri);
        response = await response.json();
        console.warn(response);
        setData(response);
    }

    useEffect(()=>{
        getAPI()
    },[])
    
    return (
        <View style={styles.main}>
            {
                data.length ? data.map((item,index)=>{
                    return <View><Text style={styles.text}>ID : {index} </Text><Text style={styles.modalText}>ID : {item.title} </Text></View> 
                }) : null
            }
            
        </View>
    )
}


const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    text: {
        backgroundColor: 'gray',
        alignItems: 'center',
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
