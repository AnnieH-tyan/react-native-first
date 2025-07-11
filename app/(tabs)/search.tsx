import React, { useState } from "react";
import { ScrollView, TextInput, View } from "react-native";

export default function Search() {
  const [value, setValue] = useState("");

  return (
    <View>
      <TextInput
        placeholder="Search"
        value={value}
        onChangeText={(text) => setValue(text)}
      />
      <ScrollView></ScrollView>
    </View>
  );
}
