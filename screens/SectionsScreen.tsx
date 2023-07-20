import {useNavigation} from '@react-navigation/native';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import {SECTIONS} from '../utils/constants';

export default function SectionsScreen() {
  const navigation = useNavigation();
  const handleSectionClick = (category: string) => {
    navigation.navigate('Category', {category});
  };
  return (
    <View>
      <FlatList
        style={styles.categoryContainer}
        data={SECTIONS}
        numColumns={2}
        key={2}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              handleSectionClick(item);
            }}
            style={({pressed}) => [
              {
                ...styles.category,
                backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
              },
            ]}>
            <Text>{item}</Text>
          </Pressable>
        )}
        keyExtractor={item => item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  categoryContainer: {
    margin: 5,
  },
  category: {
    padding: 5,
    fontSize: 10,
    borderWidth: 1,
    margin: 4,
    flex: 1,
  },
});
