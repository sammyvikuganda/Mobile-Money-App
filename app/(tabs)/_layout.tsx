import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => {
        let iconName = 'help';
        let label = route.name;

        if (route.name === 'index') {
          iconName = 'home';
          label = 'Home';
        } else if (route.name === 'chat') {
          iconName = 'chat';
          label = 'Chat';
        } else if (route.name === 'transactions') {
          iconName = 'swap-horiz';
          label = 'Transactions';
        } else if (route.name === 'salary') {
          iconName = 'attach-money';
          label = 'Salary';
        } else if (route.name === 'settings') {
          iconName = 'settings';
          label = 'Settings';
        }

        return {
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name={iconName} size={size} color={color} />
          ),
          tabBarLabel: label,
          tabBarActiveTintColor: '#3B82F6',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarStyle: {
            paddingBottom: 5,
            height: 60,
          },
        };
      }}
    />
  );
}
