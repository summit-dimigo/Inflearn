import {View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function Modal() {
    const router = useRouter();
    return(
        <View>
            <Text>I'm a modal</Text>
            <Pressable onPress={() => router.back()}>
                <Text>Close</Text>
            </Pressable>
        </View>
    )
}