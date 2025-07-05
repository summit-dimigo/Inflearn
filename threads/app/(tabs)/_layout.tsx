import { Tabs, router, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
export default function TabLayout() {

    const router = useRouter();

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tabs.Screen name="index" options={{tabBarIcon: ({focused}) => (
                <Ionicons
                    name="home"
                    size={20}
                    color={focused ? "black" : "gray"}
                    />
            )}} />
            <Tabs.Screen name="search" options={{tabBarIcon: ({focused}) => (
                <Ionicons
                    name="search"
                    size={20}
                    color={focused ? "black" : "gray"}
                    />
            )}} />
            <Tabs.Screen name="add" 
            listeners={{
                tabPress: (e) => {
                    e.preventDefault();
                    router.navigate("/modal");
                },
            }}
            options={{tabBarIcon: ({focused}) => (
                <Ionicons
                    name="add"
                    
                    size={20}
                    color={focused ? "black" : "gray"}
                    />
            )}} />
            <Tabs.Screen name="activity" options={{tabBarIcon: ({focused}) => (
                <Ionicons
                    name="heart-outline"
                    size={20}
                    color={focused ? "black" : "gray"}
                    />
            )}} />
            <Tabs.Screen name="[username]" options={{tabBarIcon: ({focused}) => (
                <Ionicons
                    name="person-outline"
                    size={20}
                    color={focused ? "black" : "gray"}
                    />
            )}} />
        </Tabs>
    );
} 