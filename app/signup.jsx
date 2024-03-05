import React from "react";
import { View, Text } from "react-native";
import { Link } from "expo-router";
const Signup = () => {
  return (
    <View>
      <Text>Sign Up Here</Text>
      <Link href={"login"}><Text>Login Here</Text></Link>
    </View>
  );
};

export default Signup;
