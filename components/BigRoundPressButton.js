import React from "react";
import { TouchableOpacity, Text } from "react-native";

const BigRoundPressButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      className="w-24 h-24 bg-blue-500 rounded-full items-center justify-center"
      onPress={onPress}
    >
      <Text className="text-white text-lg font-bold">Press me</Text>
    </TouchableOpacity>
  );
};

export default BigRoundPressButton;
