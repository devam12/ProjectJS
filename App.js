import React, { useRef } from 'react';
import { StyleSheet, View, Text, Button, TextInput, ScrollView } from 'react-native';
import { NavigationContainer, useNavigation , useNavigationContainerRef  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Product from './components/Product';
import AddToCart from './components/AddToCart';
import { useSelector } from 'react-redux';


const Stack = createNativeStackNavigator();
const App = () => {
  const navigationRef = useNavigationContainerRef();
  const cartItem = useSelector((state) => state);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="Mystore" component={MainPage} options={
            {
              headerRight: () => { return (<Button title={`My cart ${cartItem.reducer.length}`} onPress={()=>{ navigationRef.navigate('CartItem')}}/>) },
              title: "My Store"
            }}/>
        <Stack.Screen name="CartItem" component={AddToCart} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

const MainPage = () => {
  const products = [
    {
      name: "i-phone1",
      color: 'black',
      price: 129000,
      image: 'https://mockuptree.com/wp-content/uploads/edd/2022/09/Free-Iphone-14-Pro-Mock-up-960x640.jpg'
    },
    {
      name: "i-phone2",
      color: 'black',
      price: 129000,
      image: 'https://mockuptree.com/wp-content/uploads/edd/2022/09/Free-Iphone-14-Pro-Mock-up-960x640.jpg'
    },
    {
      name: "i-phone3",
      color: 'black',
      price: 129000,
      image: 'https://mockuptree.com/wp-content/uploads/edd/2022/09/Free-Iphone-14-Pro-Mock-up-960x640.jpg'
    }, {
      name: "i-phone4",
      color: 'black',
      price: 129000,
      image: 'https://mockuptree.com/wp-content/uploads/edd/2022/09/Free-Iphone-14-Pro-Mock-up-960x640.jpg'
    }
  ]
  return (
    <View>
      <ScrollView>
        {
          products.map((item, index) => {
            return <Product item={item} key={index} />
          })
        }
      </ScrollView>
    </View>
  )
}


export default App;
