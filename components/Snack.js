import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const Snack = () => {
  return (
    <View className="flex justify-center items-center  bg-[#ffd700]">
      <ImageBackground
        imageStyle={{ opacity: 0.4 }}
        source={require("../assets/campingljus2.jpg")} // Replace with the path to your image
        resizeMode="cover"
        className="h-full w-full justify-center items-center"
      ></ImageBackground>
      <StatusBar styles="auto"></StatusBar>
    </View>
  );
};

export default Snack;
