import * as React from "react";
import { View, Text } from "react-native";
import { Button } from "@ant-design/react-native";

export default function LoginScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Login Screen</Text>
      <Button onPress={props.signIn}>Login</Button>
    </View>
  );
}
