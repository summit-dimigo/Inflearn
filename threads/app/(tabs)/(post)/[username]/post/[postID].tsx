import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Post() {
  const { username, postID } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>게시글 상세 페이지입니다.</Text>
      <Text style={styles.info}>사용자: {username}</Text>
      <Text style={styles.info}>게시글 ID: {postID}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
  },
});
