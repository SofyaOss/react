import { Text, SafeAreaView, StyleSheet } from 'react-native';

export const Table = ({ num }) => {
  return (
    <SafeAreaView>
      <Text style={styles.table}>Стол {num}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  table: {
    padding: 15,
  },
});
