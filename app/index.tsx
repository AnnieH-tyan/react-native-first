import { Link } from "expo-router";
import { Text, View } from "react-native";
import "../global.css";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href="/login">Login</Link>
    </View>
  );
}
