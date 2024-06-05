import { StyleSheet, FlatList, View, Text } from 'react-native';

// You can import supported modules from npm
// import { Card } from 'react-native-paper';

// or any files within the Snack<TouchableOpacity style={styles.button} onPress={() => { logg()} }><Text style={styles.text}>Добавить в заказ</Text></TouchableOpacity>
// import AssetExample from './components/AssetExample';<Text>{item.table}</Text>

export const HistoryInfo = ({ route, navigation }) => {
  const { id } = route.params;
  
  return (
    <View style={styles.container}>
      <FlatList data={global.orders[id].dishes} renderItem={({ item }) => (
        <View style={styles.list}>
          <Text>{ item.text }</Text>
          <Text>{ item.price }р.</Text>
        </View>
      )}
      />
      <View style={styles.list}>
        <Text>Итог:</Text>
        <Text>{ global.orders[id].price }р.</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});
