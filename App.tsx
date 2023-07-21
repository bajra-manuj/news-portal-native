import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome6';
import {NavigationContainer} from '@react-navigation/native';
import ArticleScreen from './src/screens/ArticleScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import HomeScreen from './src/screens/HomeScreen';
import SectionsScreen from './src/screens/SectionsScreen';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const capitalize = (s: string) => s && s[0].toUpperCase() + s.slice(1);

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TabScreen} />
        <Stack.Screen name="Article" component={ArticleScreen} />
        <Stack.Screen
          name="Category"
          component={CategoryScreen}
          options={({route}) => ({title: capitalize(route.params.category)})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon name={'house'} color={color} size={size} solid />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={SectionsScreen}
        options={{
          tabBarLabel: 'Categories',
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon name={'list'} color={color} size={size} solid />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default App;
