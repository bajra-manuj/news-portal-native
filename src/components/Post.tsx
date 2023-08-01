import {StyleSheet, Text, View} from 'react-native';

export interface PostProps {
  userId: Number;
  id: Number;
  title: string;
  body: string;
}
export default function Post({post}: {post: Post}) {
  return (
    <View style={styles.postContainer}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body}>{post.body}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  postContainer: {
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  title: {
    fontSize: 15,
    color: 'black',
  },
  body: {
    fontSize: 10,
    textAlign: 'justify',
  },
});
