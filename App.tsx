/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ArticleScreen from './screens/ArticleScreen';
import CategoryScreen from './screens/CategoryScreen';
import HomeScreen from './screens/HomeScreen';
import SectionsScreen from './screens/SectionsScreen';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const capitalize = (s: string) => s && s[0].toUpperCase() + s.slice(1);

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={StackScreen} />
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

function StackScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Categories" component={SectionsScreen} />
    </Tab.Navigator>
  );
}

export default App;
