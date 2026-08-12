import React,{useState} from 'react';
import {View,Text,Button,TextInput,FlatList} from 'react-native';
import {styles} from './App.styles';

export default function App(){

  const [text,setText] = useState('');

  const [items,setItems] = useState([]);

  const handleItem = ()=>{
    if(text.trim() !==''){
      setItems([...items,{id: Date.now().toString(), name:text}])
      setText('');
    }
  };

  return (
    <View style={styles.Container}>
      <Text style={styles.title}>Guest List</Text>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Enter guest name"
          value={text}
          onChangeText={(val) => setText(val)}
        />
        <Button title="Add" onPress={handleItem}/>
      </View>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <View style={styles.listItem}>
            <Text style={styles.listText}>{item.name}</Text>
          </View>
        )}
      /> 
    </View>
  )
}