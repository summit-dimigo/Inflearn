import { FontDisplay } from "expo-font";
import { useLocalSearchParams, usePathname, useRouter } from "expo-router";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Touchable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Login from "./login";
import { BlurView } from "expo-blur";

export default function Index() {
  const router = useRouter();
  const pathname = usePathname();
  console.log("Current Pathname:", pathname);
  const isLoggedIn = false; // Change this to false to test the login button
  const { username } = useLocalSearchParams();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BlurView style={styles.header} intensity={50} tint="light">
        <Image
          source={require("../../../assets/images/react-logo.png")}
          style={styles.headerLogo}
        />
        {!isLoggedIn && (
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => router.push(`/login`)}
          >
            <Text style={styles.loginButtonText}>로그인</Text>
          </TouchableOpacity>
        )}
      </BlurView>
      {isLoggedIn && (
        <View style={styles.tabContainer}>
          <View style={styles.tab}>
            <TouchableOpacity onPress={() => router.push(`/`)}>
              <Text style={{ color: pathname === "/" ? "red" : "black" }}>
                For you
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tab}>
            <TouchableOpacity onPress={() => router.push(`/following`)}>
              <Text
                style={{ color: pathname === "/following" ? "red" : "black" }}
              >
                Following
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <View>
        <TouchableOpacity onPress={() => router.push(`/@inseong/post/1`)}>
          <Text>게시글1</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.push(`/@inseong/post/2`)}>
          <Text>게시글2</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.push(`/@inseong/post/3`)}>
          <Text>게시글3</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: "row",
  },
  tab: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    alignItems: "center",
  },
  headerLogo: {
    width: 50,
    height: 50,
    alignItems: "center",
  },
  loginButton: {
    position: "absolute",
    right: 10,
    top: 10,
    backgroundColor: "black",
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
    borderRadius: 5,
    paddingVertical: 7,
    paddingHorizontal: 10,
  },
  loginButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
