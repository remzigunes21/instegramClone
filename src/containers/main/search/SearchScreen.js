/* eslint-disable no-undef */
import React from 'react';
import {Image, TouchableOpacity, FlatList} from 'react-native';
import colors from 'res/colors';

const SearchScreen = () => {
  const dataSource = [
    {key: '1'},
    {key: '2'},
    {key: '3'},
    {key: '4'},
    {key: '5'},
    {key: '6'},
    {key: '7'},
    {key: '8'},
    {key: '9'},
    {key: '10'},
  ];

  renderItem = () => {
    return (
      <TouchableOpacity style={{flex: 1, aspectRatio: 1}}>
        <Image
          style={{flex: 1}}
          resizeMode="cover"
          source={{uri: 'https://picsum.photos/512'}}
        />
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      data={dataSource}
      style={{flex: 1, backgroundColor: colors.background}}
      renderItem={this.renderItem}
      keyExtractor={item => item.key}
      numColumns={3}
    />
  );
};

export default SearchScreen;
