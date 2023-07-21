import {useEffect, useState} from 'react';
import axios from 'axios';
import {FlatList, StyleSheet} from 'react-native';
import {API_KEY} from '../../env';
import Article, {ArticleProps} from '../components/Article';
import {useNavigation} from '@react-navigation/native';

export default function Articles({category}: {category: string}) {
  const [articles, setArticles] = useState<ArticleProps[] | null>(null);
  const navigation = useNavigation();
  const handleArticleClick = (article: ArticleProps) => {
    navigation.navigate('Article', {article});
  };
  useEffect(() => {
    const fetchHome = async () => {
      try {
        let data = await axios.get(
          `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${API_KEY}`,
        );
        const res = data.data.results;
        //figure out setting up a unique id field for articles. react-native-uuid refreshes the images
        setArticles(res);
      } catch (e) {
        console.log(e);
      }
    };
    fetchHome();
  });
  return (
    <FlatList
      style={styles.articlesContainer}
      data={articles}
      renderItem={({item}) => (
        <Article article={item} handleArticleClick={handleArticleClick} />
      )}
      keyExtractor={item => item.uri}
    />
  );
}

const styles = StyleSheet.create({
  articlesContainer: {
    padding: 10,
    flex: 1,
  },
});
