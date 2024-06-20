import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const initialItems = [
  {
    id: '1',
    name: 'Speedometer',
    price: 'Rp. 350.000',
    image:
      'https://images.tokopedia.net/img/cache/700/VqbcmM/2022/10/1/9f133852-c7b6-41b4-aa9f-07adb9975885.jpg',
  },
  {
    id: '2',
    name: 'Reflektor',
    price: 'Rp. 250.000',
    image:
      'https://images.tokopedia.net/img/cache/700/VqbcmM/2022/7/19/ee65777a-aaf1-4d3a-a0fe-3b71ce5fcdeb.jpg',
  },
  {
    id: '3',
    name: 'katengkas',
    price: 'Rp. 150.000',
    image:
      'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/7/21/d039ddbf-c35d-4e8c-9e71-9d875172d2f3.png',
  },
  {
    id: '4',
    name: 'Tangki',
    price: 'Rp. 850.000',
    image:
      'https://img.lazcdn.com/g/p/1dc21982278f607e2525ccbf50ea01bc.jpg_720x720q80.jpg',
  },
  {
    id: '5',
    name: 'Sadel',
    price: 'Rp. 250.000',
    image:
      'https://id-test-11.slatic.net/p/c9806bbd93c3c1a466d721969cb4edeb.jpg',
  },
  {
    id: '6',
    name: 'Swing Arm',
    price: 'Rp. 200.000',
    image:
      'https://down-id.img.susercontent.com/file/8b151bacc4cba9bcb2b97bef7e1b784e',
  },
  {
    id: '7',
    name: 'Rangka',
    price: 'Rp. 1.250.000',
    image: 'https://s1.bukalapak.com/img/61410347692/large/data.jpeg',
  },
  {
    id: '8',
    name: 'Knalpot',
    price: 'Rp. 350.000',
    image:
      'https://down-id.img.susercontent.com/file/id-11134207-7r98o-lkouswzm2gq782',
  },
  {
    id: '9',
    name: 'Kaliper',
    price: 'Rp. 250.000',
    image:
      'https://down-id.img.susercontent.com/file/2d150e1a7504a7a133ac16b7abd7602e',
  },
  {
    id: '10',
    name: 'Spion',
    price: 'Rp. 150.000',
    image: 'https://s3.bukalapak.com/img/34366323982/s-400-400/data.jpeg.webp',
  },
  {
    id: '11',
    name: 'Klakson',
    price: 'Rp. 650.000',
    image:
      'https://id-live-01.slatic.net/p/438d7acccbfc795be2bb3db7044a23c5.png',
  },
  {
    id: '12',
    name: 'Tepong',
    price: 'Rp. 250.000',
    image:
      'https://images.tokopedia.net/img/cache/500-square/hDjmkQ/2022/11/2/8f700056-25d1-4128-994b-4ba82a68c4ae.jpg',
  },
];

const HomeScreen = ({ items }) => (
  <ScrollView contentContainerStyle={styles.container}>
  <View style={styles.largeHeaderContainer}>
    <Image
      source={{
        uri: 'https://newpolishdesign.pl/wp-content/uploads/2017/07/astra-logo.png',
      }}
      style={styles.largeHeaderImage}
    />
    <Text style={[styles.header, { fontFamily: 'bebas' }]}>KLASIK OTOPART</Text>
    </View>
    <FlatList
      numColumns={2}
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginHorizontal: 'auto',
          }}>
          <View style={styles.item}>
            <Image
              source={{ uri: item.image }}
              style={{ width: 100, height: 100, borderRadius: 0 }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>Harga: {item.price}</Text>
            </View>
          </View>
        </View>
      )}
    />
  </ScrollView>
);

const SecondScreen = ({ items, addItem, removeItem }) => {
  const [newItemName, setNewItemName] = useState('');
  const [newItemPrice, setNewItemPrice] = useState('');
  const [newItemImage, setNewItemImage] = useState('');

  const handleAddItem = () => {
    if (newItemName.trim() && newItemPrice.trim() && newItemImage.trim()) {
      addItem(newItemName, newItemPrice, newItemImage);
      setNewItemName('');
      setNewItemPrice('');
      setNewItemImage('');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nama Barang"
        value={newItemName}
        onChangeText={setNewItemName}
      />
      <TextInput
        style={styles.input}
        placeholder="Harga Barang"
        value={newItemPrice}
        onChangeText={setNewItemPrice}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="URL Gambar Barang"
        value={newItemImage}
        onChangeText={setNewItemImage}
      />
      <Button title="Tambahkan Barang" onPress={handleAddItem} />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={{ flex: 1 }}>
              <Text>{item.name}</Text>
              <Text>Harga: {item.price}</Text>
            </View>
            <Image
              source={{ uri: item.image }}
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
            <Button title="Hapus" onPress={() => removeItem(item.id)} />
          </View>
        )}
      />
    </ScrollView>
  );
};

const ProfileScreen = () => (
  <View style={styles.profileContainer}>
    <Image
      source={{ uri: 'https://newpolishdesign.pl/wp-content/uploads/2017/07/astra-logo.png' }}
      style={styles.profileImage}
    />
    <Text style={styles.profileName}>ADMIN KLASIK OTOPART</Text>
  </View>
);

const MainNavigator = ({ items, addItem, removeItem }) => {
  return (
    <tabs.Navigator>
      <tabs.Screen
        name="Home"
        children={() => <HomeScreen items={items} />}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" color="black" size={25} />
          ),
          headerShown: false,
        }}
      />
      <tabs.Screen
        name="Tambahkan Barang"
        children={() => (
          <SecondScreen
            items={items}
            addItem={addItem}
            removeItem={removeItem}
          />
        )}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="plus" color="black" size={25} />
          ),
        }}
      />
      <tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user" color="black" size={25} />
          ),
        }}
      />
    </tabs.Navigator>
  );
};

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implementasi logika login di sini
    navigation.replace('Main');
  };

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.loginTitle}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default function App() {
  const [items, setItems] = useState(initialItems);

  const addItem = (name, price, image) => {
    setItems([...items, { id: Math.random().toString(), name, price, image }]);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" options={{ headerShown: false }}>
          {() => (
            <MainNavigator
              items={items}
              addItem={addItem}
              removeItem={removeItem}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  largeHeaderContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginTop: 30,
    backgroundColor: 'lightblue',
    borderRadius: 20,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

  },
  loginTitle: {
    fontSize: 24,
    marginBottom: 20,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  largeHeaderImage: {
    width: 150,
    height: 150,
    marginHorizontal: 100,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  item: {
    // flexDirection : 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
  },
   itemName: {
    fontSize: 15,
    fontWeight: '900',
    marginTop: 8,
    textAlign: 'center',
    color: 'black',
  },
  itemPrice: {
    fontSize: 13,
    fontWeight: '500',
    color: '#888',
    marginTop: 4,
    textAlign: 'center',
  },
  profileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 150,
  },
  profileName: {
    marginTop: 20,
    fontSize: 24,
  },
});
