import { FontDisplay } from "expo-font";
import { Text, TouchableOpacity, View } from "react-native";
import { useLocalSearchParams, usePathname, useRouter } from "expo-router";
import NotFound from "@/app/+not-found";

export default function Activity() {
  const router = useRouter();
  const { username } = useLocalSearchParams();
  const pathname = usePathname();

  if (
    ![
      "/activity",
      "/activity/follows",
      "/activity/replies",
      "/activity/mentions",
      "/activity/quotes",
      "/activity/reposts",
      "/activity/verified",
    ].includes(pathname)
  ) {
    return <NotFound />;
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/activity.tsx to edit this screen.</Text>
      <View>
        <TouchableOpacity onPress={() => router.push(`/activity`)}>
          <Text>All</Text>
        </TouchableOpacity>  
      </View>
      <View>
        <TouchableOpacity onPress={() => router.push(`/activity/follows`)}>
          <Text>Follows</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.push(`/activity/replies`)}>
          <Text>Replies</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.push(`/activity/mentions`)}>
          <Text>Mentions</Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity onPress={() => router.push(`/activity/quotes`)}>
            <Text>Quotes</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => router.push(`/activity/reposts`)}>
            <Text>Reposts</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => router.push(`/activity/verified`)}>
            <Text>Verified</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
