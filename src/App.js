import React,{useState} from 'react';
import {Text,View,Button} from 'react-native';
import {styles} from './App.styles'

export default function App(){
  const [isOn,setIsOn] = useState(false);

  return(
  <View style={styles.container}>
    <Text>
      Light is {isOn ? 'on' : 'off'}
    </Text>

    <Button title={isOn ?'Turn off' : 'Turn on'} onPress={() => setIsOn(!isOn)}/>

  </View>
  );
}

