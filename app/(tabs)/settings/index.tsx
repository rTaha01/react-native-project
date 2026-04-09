import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
import { styled } from "nativewind";

const SafeAreaView = styled(RNSafeAreaView);
function setting() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5 ">
    <View className='flex-1 items-center justify-center bg-background'>
      <Text>setting</Text>
    </View>
    </SafeAreaView>
  )
}

export default setting