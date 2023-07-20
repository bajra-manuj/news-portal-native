import {useEffect, useState} from 'react';
import axios from 'axios';
import {ScrollView, StyleSheet} from 'react-native';
import {API_KEY} from '../env';
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
        setArticles(data.data.results);
      } catch (e) {
        console.log(e);
      }
    };
    fetchHome();
  });
  return (
    <ScrollView style={styles.articlesContainer}>
      {articles?.map((article: ArticleProps) => (
        <Article
          key={article.title}
          article={article}
          handleArticleClick={handleArticleClick}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  articlesContainer: {
    padding: 10,
    flex: 1,
  },
});
