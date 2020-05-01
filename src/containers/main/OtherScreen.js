/* eslint-disable no-undef */
import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import palette from 'res/palette';

const OtherScreen = props => {
  _signOutAsync = () => props.navigation.navigate('Login');

  return (
    <View style={palette.container.center}>
      <Button title="Diğer: Çıkış" onPress={this._signOutAsync} />
    </View>
  );
};

export default OtherScreen;
