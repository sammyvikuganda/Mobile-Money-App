import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  const buttons = [
    { id: 1, name: 'Deposit', icon: 'call-received', color: '#10B981', route: '/deposit' },
    { id: 2, name: 'Withdraw', icon: 'call-made', color: '#EF4444', route: '/withdraw' },
    { id: 3, name: 'Airtime', icon: 'phone-android', color: '#3B82F6', route: '/airtime' },
    { id: 4, name: 'Bundles', icon: 'wifi', color: '#8B5CF6', route: '/bundles' },
    { id: 5, name: 'Umeme', icon: 'bolt', color: '#F59E0B', route: '/umeme' },
    { id: 6, name: 'TV', icon: 'live-tv', color: '#EC4899', route: '/tv' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome to MyFinanceApp</Text>
      <View style={styles.actionsContainer}>
        {buttons.map(({ id, name, icon, color, route }) => (
          <TouchableOpacity
            key={id}
            style={[styles.actionButton, { backgroundColor: `${color}20` }]}
            onPress={() => router.push(route)}
          >
            <View style={[styles.iconContainer, { backgroundColor: `${color}40` }]}>
              <MaterialIcons name={icon} size={24} color={color} />
            </View>
            <Text style={styles.actionText}>{name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F8FAFC',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1E293B',
  },
  actionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionButton: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
    elevation: 2,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
    textAlign: 'center',
  },
});
