import React from "react";
import { View, Text } from "react-native";
import { Link } from "expo-router";
const Login = () => {
  return (
    <View>
      <Text>Login Here</Text>
      <Link href={"signup"}><Text>Signup Here</Text></Link>
    </View>
  );
};

export default Login;
