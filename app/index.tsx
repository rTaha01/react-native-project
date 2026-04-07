import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";

const SplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace("/home");
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-accent">
      <Text className="text-xl font-bold text-background">splash-screen</Text>
    </View>
  );
};

export default SplashScreen;
