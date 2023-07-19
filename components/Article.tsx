import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export interface ArticleProps {
  abstract: string;
  byline: string;
  published_date: string;
  subsection: string;
  title: string;
  url: string;
  multimedia: [
    {
      caption: string;
      height: number;
      width: number;
      type: string;
      url: string;
    },
  ];
}
export default function Article({article}: {article: ArticleProps}) {
  return (
    <View style={styles.articleContainer}>
      <View style={styles.textContainer}>
        <Text>{article.title}</Text>
        <Text style={styles.publishedText}>{article.published_date}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{uri: article.multimedia[0].url}} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  articleContainer: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 5,
  },
  imageContainer: {
    width: '25%',
    height: 80,
    paddingRight: 2,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  textContainer: {
    padding: 5,
    width: '70%',
  },
  publishedText: {
    paddingTop: 5,
    fontSize: 10,
  },
});