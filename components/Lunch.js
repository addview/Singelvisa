import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const Lunch = () => {
  return (
    <View className="flex justify-center items-center  bg-[#87CEFA]">
      <ImageBackground
        imageStyle={{ opacity: 0.4 }}
        source={require("../assets/starkt-solljus.jpg")} // Replace with the path to your image
        resizeMode="cover"
        className="h-full w-full justify-center items-center"
      >
        <Text className="font-bold text-2xl">Lunch</Text>
      </ImageBackground>
      <StatusBar styles="auto"></StatusBar>
    </View>
  );
};

export default Lunch;
