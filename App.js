import * as Location from 'expo-location';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet,Text, Dimensions, View, ScrollView, ActivityIndicator } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const API_KEY = "ece3b30096da950049fee9dbc5691cd3";

export default function App() {
  const [city, setCity] = useState("Loading..");
  const [days, setDays] = useState([]);
  const [ok, setOk] = useState(true);
  const getWeather = async () => {
    const {granted} = await Location.requestForegroundPermissionsAsync();
    if(!granted){
      setOk(false); //유저가 권한요청 거절
    }
    const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync({accuracy:5});
    const location = await Location.reverseGeocodeAsync(
      {latitude, longitude}, 
      {useGoogleMaps:false}
      );
      setCity(location[0].city);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`
        );
      const json = await response.json();
      setDays(json.daily);
    };
  useEffect(() => {
    getWeather();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView 
      horizontal 
      pagingEnabled //옆으로 넘겼을때 딱딱 떨어지게 해줌
      showsHorizontalScrollIndicator="false" //스크롤인디케이터 사라지게함(밑에 스크롤바)
      contentContainerStyle={styles.weather}
      >
        {days.length === 0 ? (
          <View style={styles.day}>
            <ActivityIndicator 
            color="white" 
            size="large"
            style={{marginTop:10}}
            />
          </View>
        ) : (
          days.map((day, index) =>
          <View key={index} style={styles.day}>
            <Text style={styles.temp}>{parseFloat(day.temp.day).toFixed(1)}</Text>
            <Text style={styles.description}>{day.weather[0].main}</Text>
          </View>
          )
        )}
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
    fontSize: 60,
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
    fontSize: 100,
  },
  description: {
    marginTop: -30,
    fontSize: 60,
  },
});