import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Stack } from 'expo-router';

export default function Deposit() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Deposit',
          headerBackTitleVisible: false,
          headerShown: true,
        }}
      />
      <View style={styles.container}>
        <Text style={styles.text}>Deposit Screen</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, fontWeight: 'bold' },
});
