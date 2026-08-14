import {View,Text} from 'react-native';
import { FlatList } from 'react-native-web';
import {styles} from './components.styles';

export const ShoppingList = ({list}) => {
    return (
        <FlatList 
        data={list}
        keyExtractor={(item) => item.id}
        itemSeparatorComponent={() => {
            return (
                <View style={styles.itemSeparator}></View>
            )
        }}
        renderItem={({item}) => {
            return (
                <Text style={styles.ShoppingListItem}>{item.name}</Text>
            )
        }}

        style={styles.flatlist}
        />
    );
}