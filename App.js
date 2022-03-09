import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { AppLoading, Font } from "expo";
import { Provider } from "@ant-design/react-native";
import { AuthProvider } from "./src/services/auth";
import RootNavigator from "./src/navigation";

export default function App(props) {
  const [isRedy, setRedy] = useState(false);

  useEffect(() => {
    (async () => {
      setRedy(true);
    })();
  }, []);

  return (
    <AuthProvider>
      <Provider>
        <RootNavigator />
      </Provider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
