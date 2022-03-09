import React from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import { useAuth } from "../services/auth";

const { Navigator, Screen } = createStackNavigator();

function Header({ params, logout, noBack = true }) {
  const title = params.route.name;

  return (
    <View
      style={{
        backgroundColor: "rgba(26, 148, 163, 0.03)",
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 10,
        paddingTop: 70,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        {params.back && (
          <Icon name="caretleft" onPress={() => params.navigation.goBack()} />
        )}
        <Text style={{ fontWeight: "bold" }}>{title}</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity onPress={logout}>
          <Text style={{ fontWeight: "bold" }}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function AppStackRoutes() {
  const { isAuth, logout } = useAuth();

  return (
    <Navigator
      screenOptions={{
        headerShown: true,
        headerTitle: () => null,
        headerTintColor: "#000000",
        header: (params) => {
          return <Header params={params} logout={logout} />;
        },
      }}
    >
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
