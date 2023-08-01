import {useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import {FlatList, StyleSheet, ToastAndroid, View} from 'react-native';
import {PostProps} from '../components/Post';
import Post from '../components/Post';
import {fetchUrl} from '../utils/fetchUrl';
import {buildPostUrl} from '../utils/constants';

const POSTS_LIMIT = 10;
export default function PostsScreen() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [page, setPage] = useState(0);
  const [isNoMorePosts, setIsNoMorePosts] = useState(false);

  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      'No more posts to fetch',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  const fetchPosts = useCallback(async () => {
    try {
      const res = await fetchUrl(buildPostUrl(page, POSTS_LIMIT));
      if (!res.length) {
        console.log('limit reached');
        setIsNoMorePosts(true);
        return;
      }
      setPosts([...posts, ...res]);
      setPage(page + POSTS_LIMIT);
    } catch (e) {
      console.log({e});
    }
  }, [page, posts]);

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <View style={styles.screen}>
      <FlatList
        style={styles.postsContainer}
        data={posts}
        renderItem={({item}) => <Post post={item} />}
        keyExtractor={item => item.id}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (isNoMorePosts) {
            showToastWithGravity();
            return;
          }
          fetchPosts();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    height: '100%',
  },
  postsContainer: {
    padding: 10,
    border: 1,
    marginBottom: '3%',
    height: 500,
    flex: 1,
  },
  input: {
    backgroundColor: 'white',
    color: 'black',
    margin: 5,
  },
});
