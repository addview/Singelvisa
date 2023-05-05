import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const Breakfast = () => {
  return (
    <View className="flex justify-center items-center">
      <ImageBackground
        imageStyle={{ opacity: 0.5 }}
        source={require("../assets/pexels-matthias-groeneveld-5933631.jpg")} // Replace with the path to your image
        resizeMode="cover"
        className="h-full w-full justify-center items-center"
      >
        <Text className="font-bold text-2xl">Breakfast</Text>
      </ImageBackground>
      <StatusBar styles="auto"></StatusBar>
    </View>
  );
};

export default Breakfast;
