import React, {useState} from 'react';
import {FlatList, View, Text, StyleSheet, Button} from 'react-native';

const testData = [
  {id: 1, name: 'Name 1'},
  {id: 2, name: 'Name 2'},
  {id: 3, name: 'Name 3'},
  {id: 4, name: 'Name 4'},
  {id: 5, name: 'Name 5'},
  {id: 6, name: 'Name 6'},
  {id: 7, name: 'Name 7'},
  {id: 8, name: 'Name 8'},
  {id: 9, name: 'Name 9'},
];

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#ccc',
    borderBottomColor: '#777',
    borderBottomWidth: 1,
    padding: 20,
  },
  stickyHeader: {
    backgroundColor: 'red',
    height: 200,
    position: 'absolute',
    zIndex: 9999,
    top: 0,
    width: '100%',
    left: 0,
  },
});

const Item = item => (
  <View style={styles.item}>
    <Text>id: {item.id}</Text>
    <Text>name: {item.name}</Text>
  </View>
);

const Header = () => (
  <View>
    <View style={styles.stickyHeader}>
      <Text> sticky part</Text>
    </View>
    <View>
      <Text> non sticky part</Text>
    </View>
  </View>
);

function FlatListTest1() {
  const [zIndex, setZIndex] = useState(100);
  return (
    <View>
      <FlatList
        data={testData}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
        ListHeaderComponentStyle={{zIndex}}
        ListHeaderComponent={() => <Header />}
        style={{
          height: '80%',
        }}
      />

      <View>
        <Button
          title="Update zIndex"
          onPress={() => setZIndex(zIndex === 100 ? 101 : 100)}
        />
        <Text>will toggle zIndex between 100 and 101</Text>
        <Text>
          zIndex will apply once you update state, but on refresh it resets, and
          it causes the app to crash when you scroll. this works fine on iOS
        </Text>
        <Text>zIndex: {zIndex}</Text>
      </View>
    </View>
  );
}

export default FlatListTest1;
