import { Tabs, router, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Modal, Text, View, TouchableOpacity, Pressable } from "react-native";
import Animated from "react-native-reanimated";

export default function TabLayout() {
  const router = useRouter();
  const isLoggedIn = false;
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const AnimatedTabBarButton = ({
    children, onPress, style, ..restProps
  }: ButtomTabBarButtonProps) => {
    return (
        <Pressable
        {...restProps}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={[
            {flex: 1, justifyContent: 'center', alignItems: 'center'},
            style,
        ]}
        android_ripple={{borderless: false, radius: 0}}
        >
            <Animated.View style={{transform: [{scale: scaleValue}]}}>
                {children}
            </Animated.View>
        </Pressable>
    )

  return (
    <>
      <Tabs
        initialRouteName="(home)"
        backBehavior="history"
        screenOptions={{
          headerShown: false,
          
        }}
      >
        <Tabs.Screen
          name="(home)"
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="home"
                size={20}
                color={focused ? "black" : "gray"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="search"
                size={20}
                color={focused ? "black" : "gray"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="add"
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              if (isLoggedIn) {
                router.push("/modal");
                return;
              } else {
                openLoginModal();
              }
            },
          }}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="add"
                size={20}
                color={focused ? "black" : "gray"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="activity"
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="heart-outline"
                size={20}
                color={focused ? "black" : "gray"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="[username]"
          options={{
            tabBarIcon: (
              { focused } //username 하위에 모든 페이지가 들어감
            ) => (
              <Ionicons
                name="person-outline"
                size={20}
                color={focused ? "black" : "gray"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="(post)/[username]/post/[postID]"
          options={{
            href: null,
          }}
        />
      </Tabs>
      <Modal
        visible={isLoginModalOpen}
        transparent={true}
        animationType="slide"
        presentationStyle="overFullScreen"
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 10,
              width: "80%",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 20 }}>Login Modal</Text>
            <TouchableOpacity
              onPress={closeLoginModal}
              style={{
                backgroundColor: "#007AFF",
                padding: 10,
                borderRadius: 5,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Ionicons name="close" size={24} color="white" />
              <Text style={{ color: "white", marginLeft: 5 }}>닫기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}
