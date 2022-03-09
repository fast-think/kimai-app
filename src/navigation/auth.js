import React from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
import { useAuth } from "../services/auth";

const { Navigator, Screen } = createStackNavigator();

export default function AuthStackRoutes() {
  const { signIn } = useAuth();

  return (
    <Navigator>
      <Screen name="Login">
        {props => <Login {...props} signIn={signIn} />}
      </Screen>
    </Navigator>
  );
}
