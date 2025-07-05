import { View, Text } from "react-native";

export default function NotFound() {
  return (
    <View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Not Found</Text>
      </View>
      <View>
        <Text>404 - Page Not Found</Text>
      </View>
      <View>
        <Text>Please check the URL and try again.</Text>
      </View>
    </View>
  );
}
