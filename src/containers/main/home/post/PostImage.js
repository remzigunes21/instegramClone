import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import colors from 'res/colors';
import images from 'res/images';

const PostImage = ({post}) => {
  return <Image source={{uri: post.imgUrl}} style={styles.postImg} />;
};

export default PostImage;

const styles = StyleSheet.create({
  postImg: {
    height: 400,
  },
});
