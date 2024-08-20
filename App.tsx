import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Main from "./components/Main";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <View style={styles.background}>
      <StatusBar style="light" />
      <SafeAreaView>
        <Main />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#000",
  },
});
