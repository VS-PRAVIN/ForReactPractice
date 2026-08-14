import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Alert } from 'react-native';
import { styles } from './App.styles'
import { Header } from '../components/Header';
import { ShoppingList } from '../components/ShoppingList';
import { AddShoppingItem } from '../components/AddShoppingItem';

export default function App() {

  const [shoppingList, setShoppingList] = useState([]);

  const deleteItem = (item) => {
    setShoppingList((prevList) => {
      return prevList.filter((ListItem) => ListItem.id !== item.id)
    })
  }

  const addItem = (itemName) => {
    if (itemName.length === 0) {
      Alert.alert("Alert", "Please enter an item name");
      return;
    }
    const newItem = {
      id: Math.random().toString(),
      name: itemName,
    }
    setShoppingList((prevList) => {
      return [...prevList, newItem]
    })
  }

  return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Header />
        <AddShoppingItem addItem={addItem} />
        <ShoppingList list={shoppingList} deleteItem={deleteItem} />
      </View>
  )
}

