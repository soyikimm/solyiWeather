import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Text, Dimensions, View, ScrollView } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get("window");

console.log(SCREEN_WIDTH);

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Pyeongteak</Text>
      </View>
      <ScrollView 
      horizontal 
      pagingEnabled //옆으로 넘겼을때 딱딱 떨어지게 해줌
      showsHorizontalScrollIndicator="false" //스크롤인디케이터 사라지게함(밑에 스크롤바)
      contentContainerStyle={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>50˚</Text>
          <Text style={styles.description}>Hell</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>50˚</Text>
          <Text style={styles.description}>Hell</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>50˚</Text>
          <Text style={styles.description}>Hell</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>50˚</Text>
          <Text style={styles.description}>Hell</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>50˚</Text>
          <Text style={styles.description}>Hell</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create ({
  container:{
    flex: 1, 
    backgroundColor:"tomato",
  },
  city: {
    flex :1,
    justifyContent:"center",
    alignItems:"center",
  },
  cityName: {
    fontSize: 40,
    fontWeight: "500",
  },
  weather: {
  },
  day: {
    width : SCREEN_WIDTH,
    alignItems: "center",
  },
  temp: {
    marginTop: 50,
    fontSize: 160,
  },
  description: {
    marginTop: -30,
    fontSize: 60,
  },
});