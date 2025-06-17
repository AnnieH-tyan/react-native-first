import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const ProductDetails = () => {
  const { movieId } = useLocalSearchParams();

  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text>Movie: {movieId}</Text>
    </View>
  );
};

export default ProductDetails;
