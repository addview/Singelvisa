import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const AfternoonSnack = () => {
  return (
    <View className="flex justify-center items-center">
      <ImageBackground
        imageStyle={{ opacity: 0.5 }}
        source={require("../assets/eftermiddag.jpg")} // Replace with the path to your image
        resizeMode="cover"
        className="h-full w-full justify-center items-center"
      >
        <Text className="font-bold text-2xl">AfternoonSnack</Text>
      </ImageBackground>
      <StatusBar styles="auto"></StatusBar>
    </View>
  );
};

export default AfternoonSnack;
