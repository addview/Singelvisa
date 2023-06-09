import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const Dinner = () => {
  return (
    <View className="flex justify-center items-center bg-[#ff4500]">
      <ImageBackground
        imageStyle={{ opacity: 0.4 }}
        source={require("../assets/middag.jpg")} // Replace with the path to your image
        resizeMode="cover"
        className="h-full w-full justify-center items-center"
      >
        <Text className="font-bold text-2xl">Dinner</Text>
      </ImageBackground>
      <StatusBar styles="auto"></StatusBar>
    </View>
  );
};

export default Dinner;
