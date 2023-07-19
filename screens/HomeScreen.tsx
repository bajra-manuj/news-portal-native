import {useEffect, useState} from 'react';
import axios from 'axios';
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {API_KEY} from '../env';
import Article, {ArticleProps} from '../components/Article';
export default function HomeScreen() {
  const [articles, setArticles] = useState<ArticleProps[] | null>(null);
  useEffect(() => {
    const fetchHome = async () => {
      try {
        let data = await axios.get(
          `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`,
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
        <Article article={article} />
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
