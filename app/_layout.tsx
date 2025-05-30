import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/* This is the tabs group: hide header */}
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      
      {/* Other screens (deposit, withdraw, etc) will be here with header by default */}
    </Stack>
  );
}
