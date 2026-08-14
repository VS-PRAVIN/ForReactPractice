import { View, Text, TouchableOpacity } from 'react-native';
import { Button, FlatList } from 'react-native-web';
import { styles } from './components.styles';
// import  MaterialIcons  from '@expo/vector-icons/MaterialIcons';


export const ShoppingList = ({ list, deleteItem }) => {
    return (
        <FlatList
            data={list}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => {
                return <View style={styles.itemSeparator}></View>
            }}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => deleteItem(item)}>
                        <View style={styles.ShoppingListContainer}>
                        <Text style={styles.ShoppingListItem}>{item.name}</Text>
                        <Button title='Delete' onPress={() => deleteItem(item)} color='red'/>
                        {/* <MaterialIcons name="delete" size={24} color="red" /> */}
                        </View>
                    </TouchableOpacity>
                )
            }}

            style={styles.flatlist}
        />
    );
}