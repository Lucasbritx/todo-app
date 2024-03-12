import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import Home from "./src/screens/Home";
import { ThemeProvider } from "styled-components";
import { COLORS } from "./theme";
import { PaperProvider } from "react-native-paper";

function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <ThemeProvider theme={COLORS}>
        <PaperProvider>
          <Home />
          <StatusBar style="auto" />
        </PaperProvider>
      </ThemeProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
