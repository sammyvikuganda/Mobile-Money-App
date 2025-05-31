import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    'SpaceMono-Regular': require('../../assets/fonts/SpaceMono-Regular.ttf'),
  });

  React.useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const quickActions = [
    { id: 1, name: 'Airtime', icon: 'phone', component: FontAwesome, route: '/airtime' },
    { id: 2, name: 'Data/voice', icon: 'wifi', component: Ionicons, route: '/data' },
    { id: 3, name: 'Umeme', icon: 'bolt', component: FontAwesome, route: '/umeme' },
    { id: 4, name: 'Water', icon: 'tint', component: FontAwesome, route: '/water' },
    { id: 5, name: 'TV', icon: 'tv', component: FontAwesome, route: '/tv' },
    { id: 6, name: 'Bills', icon: 'file-text', component: FontAwesome, route: '/bills' },
  ];

  const mainActions = [
    { id: 1, name: 'Withdraw', icon: 'call-made', color: '#EF4444', route: '/withdraw' },
    { id: 2, name: 'Pay', icon: 'payment', color: '#10B981', route: '/pay' },
    { id: 3, name: 'Deposit', icon: 'call-received', color: '#3B82F6', route: '/deposit' },
  ];

  const handleAnnouncementPress = () => {
    router.push('/announcements');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.headerTop}>
            <View>
              <Text style={styles.greeting}>Hello KWAGALA</Text>
              <Text style={styles.subtitle}>Start earning today!</Text>
            </View>
            <TouchableOpacity onPress={() => router.push('/notifications')}>
              <MaterialIcons name="notifications" size={24} color="white" />
            </TouchableOpacity>
          </View>
          
          <View style={styles.balanceRow}>
            <View style={styles.balanceContainer}>
              <Text style={styles.currencyText}>UGX</Text>
              <Text style={styles.balanceAmount}>10,000</Text>
            </View>
            <TouchableOpacity 
              style={styles.addFloatButton}
              onPress={() => router.push('/add-float')}
            >
              <Text style={styles.addFloatText}>Add float</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Main Action Buttons Container */}
      <View style={styles.mainActionsContainer}>
        {mainActions.map(({ id, name, icon, color, route }) => (
          <TouchableOpacity 
            key={id} 
            style={styles.mainActionButton}
            onPress={() => router.push(route)}
          >
            <View style={[styles.mainActionIcon, { backgroundColor: `${color}20` }]}>
              <MaterialIcons name={icon} size={20} color={color} />
            </View>
            <Text style={styles.mainActionText}>{name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Quick actions grid */}
      <View style={styles.quickActions}>
        {quickActions.map(({ id, name, icon, component: IconComponent, route }) => (
          <TouchableOpacity 
            key={id} 
            style={styles.quickAction}
            onPress={() => router.push(route)}
          >
            <View style={styles.quickActionIcon}>
              <IconComponent name={icon} size={24} color="#4F46E5" />
            </View>
            <Text style={styles.quickActionText}>{name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Announcements section */}
      <View style={styles.announcementsContainer}>
        <Text style={styles.sectionTitle}>Announcements</Text>
        <TouchableOpacity 
          style={styles.announcementCard}
          onPress={handleAnnouncementPress}
          activeOpacity={0.7}
        >
          <View style={styles.announcementContent}>
            <View style={styles.announcementIconContainer}>
              <MaterialIcons name="live-tv" size={24} color="#4F46E5" />
            </View>
            <View style={styles.announcementTextContainer}>
              <Text style={styles.announcementTitle}>Do not Miss the Action!</Text>
              <Text 
                style={styles.announcementText}
                numberOfLines={3}
                ellipsizeMode="tail"
              >
                Stay connected by paying for TV subscriptions (DSTV, ZUKU, GOTV, and StarTimes) through the ChapChap A...
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F9FAFB',
    paddingBottom: 20,
  },
  header: {
    backgroundColor: '#4F46E5',
    height: 170,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    position: 'relative',
  },
  headerContent: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'SpaceMono-Regular',
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 5,
    fontFamily: 'SpaceMono-Regular',
  },
  balanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currencyText: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    marginRight: 5,
    fontWeight: 'normal',
    fontFamily: 'SpaceMono-Regular',
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'SpaceMono-Regular',
    letterSpacing: 0.5,
  },
  addFloatButton: {
    borderWidth: 1,
    borderColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  addFloatText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
    fontFamily: 'SpaceMono-Regular',
  },
  mainActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: -40,
    borderRadius: 12,
    padding: 15,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    zIndex: 10,
  },
  mainActionButton: {
    alignItems: 'center',
    width: '30%',
  },
  mainActionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  mainActionText: {
    fontWeight: 'bold',
    color: '#111827',
    fontSize: 14,
    fontFamily: 'SpaceMono-Regular',
  },
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 20,
    marginBottom: 20,
  },
  quickAction: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 20,
  },
  quickActionIcon: {
    backgroundColor: '#EEF2FF',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  quickActionText: {
    color: '#374151',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'SpaceMono-Regular',
  },
  announcementsContainer: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 15,
    fontFamily: 'SpaceMono-Regular',
  },
  announcementCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  announcementContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  announcementIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: '#EEF2FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  announcementTextContainer: {
    flex: 1,
  },
  announcementTitle: {
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 5,
    fontFamily: 'SpaceMono-Regular',
    fontSize: 15,
  },
  announcementText: {
    color: '#6B7280',
    fontSize: 12,
    fontFamily: 'SpaceMono-Regular',
    lineHeight: 16,
  },
});
