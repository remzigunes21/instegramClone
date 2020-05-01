/* eslint-disable no-undef */
import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import palette from 'res/palette';

const MainScreen = props => {
  _signOutAsync = () => {
    props.navigation.navigate('Login');
  };

  _otherScreen = async () => props.navigation.navigate('Other');

  return (
    <View style={palette.container.center}>
      <Button title="Çıkış yap" onPress={this.AnalyserNode_signOutAsync} />
      <Button title="Diğer ekran" onPress={this._otherScreen} />
    </View>
  );
};

export default MainScreen;
