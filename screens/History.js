import { StyleSheet, FlatList, View, TouchableOpacity, Text } from 'react-native';

// You can import supported modules from npm
// import { Card } from 'react-native-paper';

// or any files within the Snack<TouchableOpacity style={styles.button} onPress={() => { logg()} }><Text style={styles.text}>Добавить в заказ</Text></TouchableOpacity>
// import AssetExample from './components/AssetExample';<Text>{item.table}</Text>

export const History = ({ navigation }) => {
  const logg = () => {
    console.log(global.orders);
  };

  const showInfo = () => {
    console.log(global.orders);
  };
  
  return (
    <View style={styles.container}>
      <FlatList data={global.orders} renderItem={({item, index}) => (
        <View style={styles.item}>
          <View style={styles.info}>
            <Text style={styles.date}>{ item.date }, Стол { item.table }</Text>
            <Text>Сумма: { item.price }р.</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('HistoryInfo', { id: index })}><Text>Подробнее</Text></TouchableOpacity>
        </View>
      )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    borderColor: '#000',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    marginBottom: 5,
    marginTop: 5,
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 40,
    backgroundColor: '#fff',
  },
  info: {
    flexDirection: 'column',
  },
  date: {
    marginBottom: 5,
  },
});
