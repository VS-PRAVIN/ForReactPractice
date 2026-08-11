import React,{useState} from 'react';
import { View, Text, TextInput, Button} from 'react-native';
import { styles} from './App.styles';

export default function App(){
  const [name, setName] = useState('');

  const [submittedText, setSubmittedText] = useState('Guest');

  const handleUpdate = () => {
    if(name.trim() !==''){
      setSubmittedText(name);
      setName('');
    }
  }

  return (
    <View style={styles.Container}>
      <Text style={styles.title}>Hello {submittedText}!</Text>
      <TextInput 
      style={styles.input}
      placeholder="Enter your name."
      value={name}
      onChangeText={(text) => setName(text)}
      />

      <Button title="Update Name" onPress={handleUpdate}/>
    </View>
  );
}