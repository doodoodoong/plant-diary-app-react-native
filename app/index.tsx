import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <WebView
          source={{ uri: "https://plantdiary.co.kr" }}
          style={styles.webview}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
          scalesPageToFit={true}
          allowsInlineMediaPlayback={true}
          mixedContentMode="compatibility"
          allowsFullscreenVideo={true}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  webview: {
    flex: 1,
  },
});
