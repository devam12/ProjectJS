import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button ,TextInput, ScrollView} from 'react-native';

export const Home = () => {
    const[data,setData] = useState({});

    const getAPI = async ()=>{
        const uri = "https://jsonplaceholder.typicode.com/posts" ;
        let response = await fetch(uri);
        response = await response.json();
        setData(response);
    }

    const deleteAPI = async (id)=>{
        const uri = `https://jsonplaceholder.typicode.com/posts/${id}` ;
        let response = await fetch(uri,{
            method:'DELETE',
        });
        response = await response.json();
        getAPI();
        console.warn("deleted");
    }

    useEffect(()=>{
        getAPI()
    },[])
    
    return (
        <View style={styles.main}>
            <ScrollView>
            {
                data.length ? data.map((item,index)=>{
                    return (
                    <View style={styles.warpper}>
                        <View style={{flex:1}}>
                            <Text style={styles.text}>{index} </Text>
                        </View> 
                        <View style={{flex:6}}>
                            <Text style={styles.modalText}> {item.title} </Text>
                        </View> 
                        <View style={{flex:3}}>
                            <Button title='Delete' onPress={()=>{deleteAPI(item.id)}}></Button>
                        </View> 
                    </View>
                    )
                }) : null
            }
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    warpper:{
        borderColor:'black',
        borderWidth : 3,
        padding: 20,
        flexDirection:'row',
    },
    text: {
        padding : 3,
        backgroundColor: 'gray',
        alignItems: 'center',
    },
    centeredView: {
        flex: 1,
        alignItems: 'center',

    },
    modalView: {
        backgroundColor: 'white',
    },
    modalText: {
        paddingLeft : 13,
        alignItems: 'center',
    },
    modalButton: {
        margin: 25
    }
})
