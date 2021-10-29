import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1, flexDirection:"row"}}>
      <View style={{ flex: 1, backgroundColor:"tomato"}}></View>
      <View style={{ flex: 5, backgroundColor:"teal"}}></View>
      <View style={{ flex: 1, backgroundColor:"orange"}}></View>
    </View>
  );
}

const styles = StyleSheet.create({ //자동완성 기능이있어 편리함
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 28,
    color: "blue",
  },
});