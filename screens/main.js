import { StyleSheet, FlatList, View, TouchableOpacity } from 'react-native';

// You can import supported modules from npm
// import { Card } from 'react-native-paper';

// or any files within the Snack
// import AssetExample from './components/AssetExample';
import { Table } from '../components/Table'

export const Main = ({ navigation }) => {
  global.t = [
    {id: '1', dishes: [], price: Number()},
    {id: '2', dishes: [], price: Number()},
    {id: '3', dishes: [], price: Number()},
    {id: '4', dishes: [], price: Number()}
  ];
  
  return (
    <View style={styles.container}>
      <FlatList data={global.t} renderItem={({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Edit', { id: item.id })}>
          <Table num={item.id}/>
        </TouchableOpacity>
      )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    flex: 1,
    borderColor: '#000',
    borderRadius: 10,
    padding: 5,
    margin: 10,
    marginBottom: 5,
    marginTop: 5,
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 40,
    backgroundColor: '#fff',
  }
});
