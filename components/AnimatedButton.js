import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Animated,
} from "react-native";
import BigRoundPressButton from "./BigRoundPressButton";

const AnimatedButton = ({ animationTrigger }) => {
  const translateYValue = useRef(new Animated.Value(-100)).current;

  console.log("animationTrigger", animationTrigger);

  useEffect(() => {
    Animated.timing(translateYValue, {
      toValue: (Dimensions.get("window").height - 100) / 2,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [animationTrigger]);

  return (
    <Animated.View
      style={{
        position: "absolute",
        top: 0,
        left: (Dimensions.get("window").width - 100) / 2,
        transform: [{ translateY: translateYValue }],
      }}
    >
      <TouchableOpacity
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: "blue",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => console.log("Button Pressed")}
      >
        <Text style={{ color: "white", fontSize: 18 }}>Press</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default AnimatedButton;
