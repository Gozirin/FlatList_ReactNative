import { FlatList, ScrollView, RefreshControl, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';

const App = () => {

  const [Items, setItems] = useState([
    { name: 'Item 1 '},
    { name: 'Item 2' },
    { name: 'Item 3' },
    { name: 'Item 4' },
    { name: 'Item 5' },
    { name: 'Item 6' },
    { name: 'Item 7' },
    { name: 'Item 8' },
    { name: 'Item 9' },
    { name: 'Item 10' },
    { name: 'Item 11' },
    { name: 'Item 12' },
    { name: 'Item 13' },
    { name: 'Item 14' },
    { name: 'Item 15' },
    { name: 'Item 16' },
    { name: 'Item 17' },
    { name: 'Item 18' },
    { name: 'Item 19' },
    { name: 'Item 20' },
  ])

  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, { key: 69, item: 'Item 69'}]);
    setRefreshing(false);
  }
  
  
  return (
    <FlatList
    //numColumns={4}
    horizontal
    inverted
   
    keyExtractor={(item, index) => index.toString()}
    data={Items}
    renderItem={({item}) => (
      <View style={styles.item}>
      <Text style={styles.text}>{item.name}
      </Text>
      </View>
    )}
    
    />
    // <View style={styles.body}>
    //   <ScrollView>
    //  {
    //   Items.map((object) => {
    //     return (
    // <View style={styles.item}
    //  key = {object.key}>
    //   <Text style={styles.text}>{object.item}
    //   </Text>
    // </View>
    //     )
    //   })
    //  }
    //  </ScrollView>
    //  </View>
  
);
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'column',
   
  },
  item: {
    margin: 10,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 35,
    margin: 10,
    fontStyle: 'italic',
  },
});
export default App;

