import {useRoute} from '@react-navigation/native';
import moment from 'moment';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
export default function ArticleScreen() {
  const {article} = useRoute().params;
  const published_date = moment(article.published_date).format('DD-MM-yy');
  const updated_date = moment(article.updated_date).format('DD-MM-yy');
  return (
    <ScrollView style={styles.articleContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{article.title}</Text>
      </View>
      <Image source={{uri: article.multimedia[0].url}} style={styles.image} />

      <View style={styles.textContainer}>
        <Text style={styles.byline}>{article.byline}</Text>
        <View style={styles.dates}>
          <Text style={styles.publishedText}>
            Published at: {published_date}
          </Text>
          <Text style={styles.publishedText}>Updated at: {updated_date}</Text>
        </View>
        <Text style={styles.abstract}>{article.abstract}</Text>
        <Text style={styles.abstract}>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia.
          Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
          voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
          officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
          commodo officia dolor Lorem duis laboris cupidatat officia voluptate.
          Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis
          officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis
          sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea
          consectetur et est culpa et culpa duis.
        </Text>
        <Text style={styles.abstract}>{article.abstract}</Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  articleContainer: {
    paddingTop: 10,
    paddingBottom: 30,
  },
  titleContainer: {
    paddingHorizontal: 10,
    paddingLeft: 15,
    fontSize: 15,
  },
  textContainer: {
    paddingHorizontal: 10,
    paddingLeft: 15,
    fontSize: 15,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: '600',
    color: 'black',
  },
  abstract: {
    fontSize: 15,
    lineHeight: 25,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginVertical: 20,
  },
  publishedText: {
    fontSize: 12,
    color: 'black',
  },
  byline: {
    fontWeight: '600',
    color: 'black',
  },
  dates: {
    display: 'flex',
    paddingVertical: 10,
    flexDirection: 'row',
    gap: 20,
  },
});
