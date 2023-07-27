import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StyleSheet, View, TextInput, Button, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigator = useNavigation();

  const handlePress = () => {
    if (username === 'admin' && password === 'password') {
      AsyncStorage.setItem('news-app-logged-in', '1')
        .then(() => navigator.navigate('HomeScreen'))
        .catch(e => console.log(e));
    } else {
      setMessage('WRONG USERNAME OR PASSWORD');
      let id = setTimeout(() => {
        setMessage('');
        clearTimeout(id);
      }, 5000);
    }
  };
  useEffect(() => {
    const checkLoggedIn = async () => {
      // await AsyncStorage.setItem('news-app-logged-in', '');
      await AsyncStorage.getItem('news-app-logged-in').then(
        value => value === '1' && navigator.navigate('HomeScreen'),
      );
    };
    checkLoggedIn();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>NEWS PORTAL</Text>
      </View>
      <View style={styles.inputs}>
        <TextInput
          style={styles.input}
          value={username}
          placeholder="Username"
          onChangeText={text => setUsername(text)}
          autoFocus={true}
        />
        <TextInput
          style={styles.input}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
        />
        <Text style={styles.errorMessage}>{!!message.length && message}</Text>
        <Button title="Login" onPress={handlePress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  titleContainer: {},
  titleText: {
    fontSize: 30,
    textAlign: 'center',
    padding: 50,
    color: 'black',
    fontWeight: '500',
  },
  inputs: {
    flex: 1,
    padding: 10,
  },
  input: {
    backgroundColor: 'white',
    color: 'black',
    margin: 5,
  },
  errorMessage: {
    color: 'red',
    textAlign: 'center',
    padding: 5,
  },
});
