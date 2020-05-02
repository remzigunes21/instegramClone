import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import colors from 'res/colors';
import StoryListItem from './StoryListItem';

const StoryContainer = ({stories, onStoryPress}) => {
  return (
    <React.Fragment>
      <FlatList
        horizontal={true}
        style={styles.container}
        data={stories}
        renderItem={({item}) => (
          <StoryListItem item={item} onStoryPress={onStoryPress} />
        )}
      />
      <View style={styles.seperator} />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    marginTop: 10,
    paddingBottom: 10,
  },
  seperator: {
    height: 0.5,
    backgroundColor: colors.seperator,
  },
});

export default StoryContainer;
