import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { useAuth } from "../services/auth";
import AppStackRoutes from "./app";
import AuthRoutes from "./auth";

export default function Routes() {
  const { isAuthed } = useAuth();

  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        {isAuthed ? <AppStackRoutes /> : <AuthRoutes />}
      </SafeAreaView>
    </NavigationContainer>
  );
}
