import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import Breakfast from "../components/Breakfast";
import Snack from "../components/Snack";
import Lunch from "../components/Lunch";
import AfternoonSnack from "../components/AfternoonSnack";
import Dinner from "../components/Dinner";
import EveningSnack from "../components/EveningSnack";
import AnimatedButton from "../components/AnimatedButton";

const index = () => {
  const [initialIndex, setInitialIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const scrollViewRef = useRef(null);

  useEffect(() => {
    // Your function to calculate the initial index based on your conditions
    const calculatedInitialIndex = calculateInitialIndex();

    // Update the initialIndex state variable
    setInitialIndex(calculatedInitialIndex);
  }, []);

  useEffect(() => {
    if (scrollViewRef.current && initialIndex !== null) {
      const screenWidth = Dimensions.get("window").width;
      const offsetX = screenWidth * initialIndex;
      setTimeout(() => {
        scrollViewRef.current.scrollTo({ x: offsetX, y: 0, animated: false });
      }, 10);
    }
  }, [initialIndex]);

  const handleMomentumScrollEnd = (event) => {
    const screenWidth = Dimensions.get("window").width;
    const currentOffset = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(currentOffset / screenWidth);

    setCurrentIndex(newIndex);
  };

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

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleMomentumScrollEnd}
      >
        {/* Your slides */}
        <View style={{ width: Dimensions.get("window").width }}>
          <Breakfast />
        </View>
        <View style={{ width: Dimensions.get("window").width }}>
          <Snack />
        </View>
        <View style={{ width: Dimensions.get("window").width }}>
          <Lunch />
        </View>
        <View style={{ width: Dimensions.get("window").width }}>
          <AfternoonSnack />
        </View>
        <View style={{ width: Dimensions.get("window").width }}>
          <Dinner />
        </View>
        <View style={{ width: Dimensions.get("window").width }}>
          <EveningSnack />
        </View>
      </ScrollView>
      <AnimatedButton triggerAnimation={currentIndex} />
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
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});
