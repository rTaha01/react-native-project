import "@/global.css";
import { Image, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import { HOME_USER } from "@/constants/data";

const SafeAreaView = styled(RNSafeAreaView);
export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5 ">
      <View className="home-header">
        <View className="home-user">
          <Image
            source={images.avatar}
            className="home-avatar"
            resizeMode="contain"
          />
          <Text className="home-user-name">{HOME_USER.name}</Text>
        </View>
        <Image source={icons.add} className="home-add-icon" />
      </View>
    </SafeAreaView>
  );
}
