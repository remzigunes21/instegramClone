/* eslint-disable no-undef */
import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';

import images from 'res/images';
import CameraShutterButton from './CameraShutterButton';
import {RNCamera} from 'react-native-camera';

const StoryCameraScreen = props => {
  takePicture = async () => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };
  return (
    <View style={styles.container}>
      <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        style={styles.preview}
        type={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Kamera kullanım izni',
          message:
            'Uygulamanın kameranızı kullanması için izin vermeniz gerekiyor',
          buttonPositive: 'Tamam',
          buttonNegative: 'iptal',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Ses kaydı izni',
          message:
            'Uygulamanın sesinizi kaydetmesi için izin vermeniz gerekiyor.',
          buttonPositive: 'Tamam',
          buttonNegative: 'İptal',
        }}
        onGoogleVisionBarcodesDetected={({barcodes}) => {
          console.log(barcodes);
        }}>
        {({camera, status}) => {
          return status !== 'READY' ? (
            <View style={styles.preview} />
          ) : (
            <CameraShutterButton onPress={() => this.takePicture(camera)} />
          );
        }}
      </RNCamera>
    </View>
  );
};

StoryCameraScreen.navigationOptions = ({navigation}) => ({
  headerTransparent: true,
  headerStyle: {borderBottomWidth: 0},
  headerLeft: () => (
    <View style={styles.headerLeftContainer}>
      <TouchableOpacity>
        <Image style={styles.headerLeftImage} source={images.settings} />
      </TouchableOpacity>
    </View>
  ),
  headerTitle: () => (
    <TouchableOpacity onPress={() => navigation.navigate('Info')}>
      <Image style={styles.headerTitleImage} source={images.flash} />
    </TouchableOpacity>
  ),
  headerRight: () => (
    <View style={styles.headerRightContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={styles.headerRightImage} source={images.close_thick} />
      </TouchableOpacity>
    </View>
  ),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  headerLeftContainer: {
    marginLeft: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLeftImage: {
    height: 25,
    width: 25,
  },
  headerTitleImage: {
    paddingTop: 10,
    height: 23,
    width: 23,
  },
  headerRightContainer: {
    marginRight: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRightImage: {
    marginLeft: 20,
    paddingTop: 10,
    height: 23,
    width: 23,
    resizeMode: 'contain',
  },
});
export default StoryCameraScreen;
