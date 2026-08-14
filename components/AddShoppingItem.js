import {Text,View,TextInput,Button} from 'react-native' ;
import {styles} from './components.styles';
import {useState} from 'react';

export const AddShoppingItem = ({addItem}) => {

    const [item, setItem] = useState(''); 

    const pressHandler = () => {
        addItem(item);
        setItem('');
    }

    return (
        <View style={styles.addContainer}>
            <TextInput placeholder='Enter an Item' style={styles.addInput} 
            value={item} 
            onChangeText={(text) => setItem(text)}/>
            <Button title='Add Item' onPress={() => pressHandler(item)} color='gray'/>
        </View>
    )
}