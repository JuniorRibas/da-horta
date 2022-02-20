import React from "react";

import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Inter_600SemiBold,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";

import Init from "./src/pages/Init";
import theme from "./src/styles/theme";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme["default"]}>
      <Init />
    </ThemeProvider>
  );
}
