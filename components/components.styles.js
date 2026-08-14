import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    backgroundColor: 'cornflowerblue',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headertext: {    
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20,
  },
  ShoppingListItem: {
    fontWeight: 'bold',
    padding: 20,
  },
    itemSeparator : {
    height: 1,
    backgroundColor: 'lightgray',
  },
    flatlist: {
        paddingTop: 20,
    },
    addContainer: {
        // padding: 20,
        // backgroundColor: 'white',
        marginHorizontal: 40,
    },
    addInput: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        marginVertical: 20,
        textAlign: 'center',
    },
    ShoppingListContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 20,
    }
});