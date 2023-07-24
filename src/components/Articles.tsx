import {useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import {Button, FlatList, RefreshControl, StyleSheet, Text} from 'react-native';
import {API_KEY} from '../../env';
import Article, {ArticleProps} from '../components/Article';
import {useNavigation} from '@react-navigation/native';

export default function Articles({category}: {category: string}) {
  const [articles, setArticles] = useState<ArticleProps[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState<ArticleProps[]>([]);
  const navigation = useNavigation();
  const handleArticleClick = (article: ArticleProps) => {
    navigation.navigate('Article', {article});
  };

  const fetchHome = useCallback(async () => {
    try {
      let data = await axios.get(
        `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${API_KEY}`,
      );
      const res = data.data.results;
      //figure out setting up a unique id field for articles. react-native-uuid refreshes the images
      setTotalArticles(res);
      setArticles(res.slice(0, page * 10));
      setRefreshing(false);
    } catch (e) {
      console.log(e);
    }
  }, [category, page]);

  useEffect(() => {
    fetchHome();
  }, []);

  useEffect(() => {}, [page]);

  return articles.length !== 0 ? (
    <FlatList
      style={styles.articlesContainer}
      data={articles}
      renderItem={({item}) => (
        <Article article={item} handleArticleClick={handleArticleClick} />
      )}
      keyExtractor={item => item.uri}
      ListFooterComponent={
        <Button
          onPress={() => {
            setPage(page + 1);
            setArticles(totalArticles.slice(0, page * 10));
          }}
          title="Load More"
        />
      }
      ListFooterComponentStyle={styles.listFooter}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => {
            setRefreshing(true);
            setPage(1);
            fetchHome();
          }}
        />
      }
    />
  ) : (
    <Text>Error Fetching articles</Text>
  );
}

const styles = StyleSheet.create({
  articlesContainer: {
    padding: 10,
    marginBottom: '2%',
    flex: 1,
  },
  listFooter: {
    margin: 5,
    justifyContent: 'space-between',
  },
});
