import { Text, StyleSheet, FlatList, View, TouchableOpacity, Modal, Image } from 'react-native';
import React from 'react';

export const Edit = ({ route, navigation }) => {
  const { id } = route.params;
  const [ModalWindow, setModalWindow] = React.useState(false);
  const [inOrder, setInOrder] = React.useState([]);
  const [newDish, setNewDish] = React.useState('');

  React.useEffect(() => {
    navigation.setOptions({
      title: 'Стол ' + id,
    });
    const updatedOrder = global.t[Number(id) - 1].dishes;
    setInOrder(updatedOrder);
  }, [id, navigation]);

  const addDish = (name, price) => {
    const newInOrder = { id: Date.now(), text: name, price: price }
    setInOrder([...inOrder, newInOrder]);
    global.t[Number(id) - 1].dishes.push(newInOrder);
    global.t[Number(id) - 1].price = global.t[Number(id) - 1].price + Number(price);
    setNewDish('');
  };

  const rmDish = (dishId, price) => {
    global.t[Number(id) - 1].price = global.t[Number(id) - 1].price - Number(price);
    const updatedOrder = inOrder.filter((dish) => dish.id !== dishId);
    global.t[Number(id) - 1].dishes = global.t[Number(id) - 1].dishes.filter((dish) => dish.id !== dishId);
    setInOrder(updatedOrder);
  };

  const calc = (dishId, price) => {
    let today = new Date();
    let day = today.getDate() + "." + parseInt(today.getMonth() + 1) + "." + today.getFullYear();
    let time = today.getHours() + ":" + today.getMinutes();
    const newCalc = {id: Date.now(), date: day + " " + time, table: Number(id), dishes: global.t[Number(id) - 1].dishes, price: global.t[Number(id) - 1].price};
    global.orders.push(newCalc);
    global.t[Number(id) - 1].dishes = [];
    const updatedOrder = [];
    setInOrder(updatedOrder);
  };

  return (
    <View style={styles.container}>
      <FlatList style={styles.dishes} data={inOrder} renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => { rmDish(item.id, item.price) }}>
            <Text>{ item.text }</Text>
            <Text>{ item.price }р.</Text>
            
            <Text>Удалить</Text>
          </TouchableOpacity>
        )}
      />
      <Modal
          animationType="slide"
          transparent={false}
          visible={ModalWindow}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View>
            <TouchableOpacity style={styles.close} onPress={() => setModalWindow(false)}>
              <Image style={styles.cross} source={{ uri: "https://www.svgrepo.com/show/506172/cross.svg" }}/>
            </TouchableOpacity>
            <FlatList style={styles.menu} data={global.dishList} renderItem={({ item }) => (
              <TouchableOpacity style={styles.item} onPress={() => { addDish(item.text, item.price) }}>
                <Text>{ item.text }</Text>
                <Text>{ item.price }</Text>
              </TouchableOpacity>
              )}
            />
          </View>
        </Modal>
      <TouchableOpacity style={styles.button} onPress={() => { setModalWindow(true)}}><Text style={styles.text}>Добавить в заказ</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button_calc} onPress={() => { calc(), navigation.navigate('Main') }}><Text style={styles.btn_text}>Рассчитать</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  button: {
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    borderWidth: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  button_calc: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    borderWidth: 4,
    backgroundColor: '#ecf0f1',
    elevation: 3,
  },
  btn_text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  close: {
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'end',
  },
  item: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    borderColor: '#000',
    borderRadius: 10,
    padding: 15,
    paddingLeft: 30,
    paddingRight: 30,
    margin: 10,
    marginBottom: 5,
    marginTop: 5,
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 40,
  },
  cross: {
    height: 20,
    width: 20,
  },
});