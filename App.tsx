import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome6';
import {NavigationContainer} from '@react-navigation/native';
import ArticleScreen from './src/screens/ArticleScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import HomeScreen from './src/screens/HomeScreen';
import SectionsScreen from './src/screens/SectionsScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const capitalize = (s: string) => s && s[0].toUpperCase() + s.slice(1);

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={MyDrawer}
          options={() => ({headerShown: false})}
        />
        <Stack.Screen
          name="Category"
          component={CategoryScreen}
          options={({route}) => ({title: capitalize(route.params.category)})}
        />
        <Stack.Screen name="Article" component={ArticleScreen} />
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
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon name={'house'} color={color} size={size} solid />
          ),
        }}
      />
      <Tab.Screen
        name="Sections"
        component={SectionsScreen}
        options={{
          tabBarLabel: 'Sections',
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon name={'list'} color={color} size={size} solid />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerLabel: 'Home',
          drawerIcon: ({color, size}) => (
            <FontAwesomeIcon name={'house'} color={color} size={size} solid />
          ),
        }}
      />
      <Drawer.Screen
        name="Sections"
        component={SectionsScreen}
        options={{
          drawerLabel: 'Sections',
          drawerIcon: ({color, size}) => (
            <FontAwesomeIcon name={'list'} color={color} size={size} solid />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default App;
