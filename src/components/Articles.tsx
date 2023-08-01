import {useCallback, useEffect, useState} from 'react';
import {FlatList, RefreshControl, StyleSheet} from 'react-native';
import Article, {ArticleProps} from '../components/Article';
import {useNavigation} from '@react-navigation/native';
import {fetchUrl} from '../utils/fetchUrl';
import {buildArticleUrl} from '../utils/constants';

const NUMBER_OF_ARTICLES_PER_PAGE = 10;
export default function Articles({category}: {category: string}) {
  const [articles, setArticles] = useState<ArticleProps[]>([]);
  const [refreshing, setRefreshing] = useState(true);
  const [page, setPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState<ArticleProps[]>([]);
  const navigation = useNavigation();
  const handleArticleClick = (article: ArticleProps) => {
    navigation.navigate('Article', {article});
  };

  const fetchHome = useCallback(async () => {
    try {
      let data = await fetchUrl(buildArticleUrl(category));
      const res = data.results;
      setTotalArticles(res);
      setArticles(res.slice(0, page * NUMBER_OF_ARTICLES_PER_PAGE));
    } catch (e) {
      console.log(e);
    }
    setRefreshing(false);
  }, [category, page]);

  useEffect(() => {
    fetchHome();
  }, []);

  return (
    <FlatList
      style={styles.articlesContainer}
      data={articles}
      renderItem={({item}) => (
        <Article article={item} handleArticleClick={handleArticleClick} />
      )}
      keyExtractor={item => item.uri}
      onEndReachedThreshold={0.2}
      onEndReached={() => {
        setPage(page + 1);
        setArticles(totalArticles.slice(0, (page + 1) * 10));
      }}
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
  );
}

const styles = StyleSheet.create({
  articlesContainer: {
    padding: 10,
    marginBottom: '3%',
    flex: 1,
  },
});
