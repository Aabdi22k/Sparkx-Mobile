import React from "react";
import { Stack } from "expo-router";
import { withExpoSnack } from "nativewind";
const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{}} />
      <Stack.Screen name="signup" options={{}} />
      <Stack.Screen name="conversations" options={{}} />
      <Stack.Screen name="conversation/[id]" options={{}} />
    </Stack>
  );
};

export default withExpoSnack(RootLayout);
