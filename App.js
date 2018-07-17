/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
       <TouchableOpacity onPress={this._onPressButton}>
         <Text>Select Document</Text>
       </TouchableOpacity>
      </View>
    );
  }

  _onPressButton = () => {
    DocumentPicker.show({
      filetype: [DocumentPickerUtil.pdf()],
    },(error,res) => {
      // Android
      console.log(
         res.uri,
         res.type, // mime type
         res.fileName,
         res.fileSize
      );
    });

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
