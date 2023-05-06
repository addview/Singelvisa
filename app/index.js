import { View, StyleSheet } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import Swiper from "react-native-swiper";
import Breakfast from "../components/Breakfast";
import Snack from "../components/Snack";
import Lunch from "../components/Lunch";
import AfternoonSnack from "../components/AfternoonSnack";
import Dinner from "../components/Dinner";
import EveningSnack from "../components/EveningSnack";

const index = () => {
  const swiperRef = useRef(null);

  const [initialIndex, setInitialIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bgColor, setbgColor] = useState("#33f");

  useEffect(() => {
    // Your function to calculate the initial index based on your conditions
    const calculatedInitialIndex = calculateInitialIndex();

    // Update the initialIndex state variable
    setInitialIndex(calculatedInitialIndex);
  }, []);

  const calculateInitialIndex = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 0 && currentHour < 10) {
      return 0;
    } else if (currentHour >= 10 && currentHour < 12) {
      return 1;
    } else if (currentHour >= 12 && currentHour < 14) {
      return 2;
    } else if (currentHour >= 14 && currentHour < 17) {
      return 3;
    } else if (currentHour >= 17 && currentHour < 20) {
      return 4;
    } else {
      return 5;
    }
  };

  const setFF = (index) => {
    console.log("index", index);
    if (index == 0) {
      setbgColor("#000");
    } else if (index == 1) {
      setbgColor("#fff");
    } else if (index == 2) {
      setbgColor("#fff");
    } else if (index == 3) {
      setbgColor("#55d");
    } else if (index == 4) {
      setbgColor("#00c");
    } else if (index == 5) {
      setbgColor("#000");
    }
  };
  const handleButtonPress = () => {
    if (swiperRef.current) {
      const currentIndex = swiperRef.current.state.index;
      console.log("Current index:", currentIndex);
      // Do something with the current index
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Swiper
        ref={swiperRef}
        style={styles.wrapper}
        showsButtons={false}
        loop={true}
        showsPagination={false}
        horizontal={true}
        scrollEnabled={true}
        index={initialIndex}
        onIndexChanged={(index) => {
          const currentIndex = swiperRef.current.state.index;
          console.log("Current index:", currentIndex);
        }}
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
