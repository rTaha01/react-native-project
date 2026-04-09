import ListingTitle from "@/components/header-card";
import SubscriptionCard from "@/components/SubscriptionCard";
import UpcomingSubscriptionCard from "@/components/UpcomingSubscriptionCard";
import {
  HOME_BALANCE,
  HOME_SUBSCRIPTIONS,
  HOME_USER,
  UPCOMING_SUBSCRIPTIONS,
} from "@/constants/data";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import "@/global.css";
import { formatCurrency } from "@/lib/utils";
import dayjs from "dayjs";
import { styled } from "nativewind";
import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);
export default function App() {
  const [expandedSubscriptionId, setExpandedSubscriptionId] = React.useState<
    string | null
  >(null);
  return (
    <SafeAreaView className="flex-1 bg-background p-5 ">
      <View className="mb-5">
        <FlatList
          ListHeaderComponent={() => (
            <>
              <View className="home-header">
                <View className="home-user">
                  <Image
                    source={images.avatar}
                    className="home-avatar"
                    resizeMode="contain"
                  />
                  <Text className="home-user-name">{HOME_USER.name}</Text>
                </View>
                <View
                  style={{
                    position: "relative",
                    right: -30,
                    width: 50,
                    height: 50,
                    borderColor: "#C6BFA2",
                    borderWidth: 1,
                    borderRadius: 25,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image source={icons.add} className="home-add-icon" />
                </View>
                <View></View>
              </View>
              <View className="home-balance-card">
                <Text className="home-balance-label">Balance</Text>
                <View className="home-balance-row">
                  <Text className="home-balance-amount">
                    {formatCurrency(HOME_BALANCE.amount)}
                  </Text>
                  <Text className="home-balance-date">
                    {dayjs(HOME_BALANCE.nextRenewalDate).format("MM/DD")}
                  </Text>
                </View>
              </View>

              <View>
                <ListingTitle title="Upcoming" />
                <FlatList
                  data={UPCOMING_SUBSCRIPTIONS}
                  renderItem={({ item }) => (
                    <UpcomingSubscriptionCard {...item} />
                  )}
                  keyExtractor={(item) => item.id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  ListEmptyComponent={
                    <Text className="home-empty-state">
                      No upcoming subscriptions
                    </Text>
                  }
                />
              </View>
              <ListingTitle title="Subscriptions" />
            </>
          )}
          data={HOME_SUBSCRIPTIONS}
          renderItem={({ item }) => (
            <SubscriptionCard
              {...item}
              expanded={expandedSubscriptionId === item.id}
              onPress={() =>
                setExpandedSubscriptionId((currentId) =>
                  currentId === item.id ? null : item.id,
                )
              }
            />
          )}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={<View className="h-5"></View>}
          extraData={expandedSubscriptionId}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Text className="home-empty-state">No subscriptions</Text>
          }
          contentContainerClassName="pb-30"
        />
      </View>
    </SafeAreaView>
  );
}
