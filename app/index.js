import { View, Text, SafeAreaView, Animated, StyleSheet } from "react-native";
import React, { useRef, useEffect } from "react";
import Swiper from "react-native-swiper";
import Breakfast from "../components/Breakfast";
import LinearGradient from "react-native-linear-gradient";

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
        loop={true}
        showsPagination={false}
        index={0}
        onIndexChanged={(index) => {
          Animated.timing(backgroundColorAnim, {
            toValue: index,
            duration: 1000,
            useNativeDriver: false,
          }).start();
          fadeOut();

          setTimeout(() => {
            fadeIn();
          }, 1000);
        }}
      >
        <Animated.View style={[styles.page, { opacity: fadeAnim }]}>
          <Text style={styles.text}>Sida 1</Text>
        </Animated.View>
        <Animated.View style={[styles.page, { opacity: fadeAnim }]}>
          <Text style={styles.text}>Sida 2</Text>
        </Animated.View>
        <Animated.View style={[styles.page, { opacity: fadeAnim }]}>
          <Text style={styles.text}>Sida 3</Text>
        </Animated.View>
        {/* ...repeat for other pages */}
      </Swiper>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9dd6eb",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
