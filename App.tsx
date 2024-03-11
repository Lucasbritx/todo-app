import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import Home from "./src/screens/Home";
import { ThemeProvider } from "styled-components";
import theme from "./theme";


function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <ThemeProvider theme={theme}>
        <Home />
        <StatusBar style="auto" />
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
