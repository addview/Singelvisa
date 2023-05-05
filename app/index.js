import { View, Text, SafeAreaView, Animated, StyleSheet } from "react-native";
import React, { useRef, useEffect } from "react";
import Swiper from "react-native-swiper";
import Breakfast from "../components/Breakfast";
import LinearGradient from "react-native-linear-gradient";
import Snack from "../components/Snack";
import Lunch from "../components/Lunch";
import AfternoonSnack from "../components/AfternoonSnack";
import Dinner from "../components/Dinner";
import EveningSnack from "../components/EveningSnack";

const index = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const backgroundColorAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    fadeIn();
  }, []);

  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        loop={false}
        showsPagination={false}
        horizontal={false}
        scrollEnabled={true}
      >
        <Breakfast />
        <Snack />
        <Lunch />
        <AfternoonSnack />
        <Dinner />
        <EveningSnack />
      </Swiper>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});
