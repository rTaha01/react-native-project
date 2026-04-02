import "@/global.css";
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-accent">
        Welcome to Nativewind!
      </Text>
      <Link
        href="/(splash-screen)/splash-screen"
        className="mt-4 rounded-full bg-accent px-4 py-2 text-xl font-bold text-background"
      >
        Go to Splash Screen
      </Link>
      <Link
        href="/(auth)/sign-in"
        className="mt-4 rounded-full bg-accent px-4 py-2 text-xl font-bold text-background"
      >
        Go to Sign In
      </Link>
      <Link
        href="/(auth)/sign-up"
        className="mt-4 rounded-full bg-accent px-4 py-2 text-xl font-bold text-background"
      >
        Go to Sign Up
      </Link>
    </View>
  );
}
