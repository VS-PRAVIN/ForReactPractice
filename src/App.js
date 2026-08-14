import {StatusBar} from 'expo-status-bar';
import React,{useState} from 'react';
import {Text,View } from 'react-native' ;
import {styles} from './App.styles'
import { Header } from '../components/Header';
import { ShoppingList } from '../components/ShoppingList';

export default function App(){

  const [shoppingList, setShoppingList] = useState([
    {id: 1, name: 'Milk'},
    {id: 2, name: 'Eggs'},
    {id: 3, name: 'Bread'},
    {id: 4, name: 'Butter'},
  ]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <Header/>
      <ShoppingList list={shoppingList}/>
    </View>
  )
}

