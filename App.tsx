import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// Definim tipurile pentru navigare
type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Inchiriaza: undefined;
  Depune: undefined;
  Cont: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const Stack = createNativeStackNavigator();

// Ecranul "Login"
const LoginScreen = ({ navigation }: HomeScreenProps) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    // Simulăm autentificarea
    if (username === 'user' && password === 'password') {
      navigation.replace('Home'); // Navigăm la Home și eliminăm ecranul Login din stivă
    } 
  };

  return (
    <View style={[styles.screen, { backgroundColor: 'lightgray' }]}>
      <Text style={styles.title}>Autentificare</Text>

      {/* Input pentru username */}
      <Text style={styles.label}>Username:</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Introdu username-ul"
      />

      {/* Input pentru parola */}
      <Text style={styles.label}>Parola:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Introdu parola"
        secureTextEntry={true}
      />

      {/* Buton pentru autentificare */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Autentificare</Text>
      </TouchableOpacity>
    </View>
  );
};

// Ecranul principal "Home"
const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View style={styles.homeContainer}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Inchiriaza')}>
        <Text style={styles.buttonText}>Inchiriaza</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Depune')}>
        <Text style={styles.buttonText}>Depune</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.contButton} onPress={() => navigation.navigate('Cont')}>
        <Text style={styles.buttonText}>Cont</Text>
      </TouchableOpacity>
    </View>
  );
};

// Ecranul "Inchiriaza"
const InchiriazaScreen = () => {
  return (
    <View style={[styles.screen, { backgroundColor: 'lightblue' }]}>
      <Text style={styles.title}>Alege un produs pentru închiriere</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Inchiriaza produs</Text>
      </TouchableOpacity>
    </View>
  );
};

// Ecranul "Depune"
const DepuneScreen = () => {
  return (
    <View style={[styles.screen, { backgroundColor: 'lightgreen' }]}>
      <Text style={styles.title}>Depune un obiect</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Depune obiect</Text>
      </TouchableOpacity>
    </View>
  );
};

// Ecranul "Cont"
const ContScreen = () => {
  return (
    <View style={[styles.screen, { backgroundColor: 'lightcoral' }]}>
      <Text style={styles.title}>Detalii Cont</Text>
      <Text style={styles.text}>Nume utilizator: Silviu</Text>
      <Text style={styles.text}>Email: silviu@example.com</Text>
    </View>
  );
};

// Componenta principală App
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Autentificare' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Acasă' }} />
        <Stack.Screen name="Inchiriaza" component={InchiriazaScreen} />
        <Stack.Screen name="Depune" component={DepuneScreen} />
        <Stack.Screen name="Cont" component={ContScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Stiluri
const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFDD0', // crem
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    marginTop: 20,
    borderRadius: 10,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 10,
  },
});
