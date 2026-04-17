import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'HomeMain'>;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const userName = 'John Doe';
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome back,</Text>
        <Text style={styles.userName}>{userName}</Text>

        <View style={styles.statsSection}>
          <TouchableOpacity style={styles.statCard} onPress={() => navigation.navigate('Profile', { userId: '123' })}>
            <Text style={styles.statValue}>42</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.statCard} onPress={() => navigation.navigate('Profile', { userId: '123' })}>
            <Text style={styles.statValue}>1.2K</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('Profile', { userId: '123' })}>
          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.secondaryButtonText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  content: { padding: 20 },
  welcomeText: { fontSize: 16, color: '#666' },
  userName: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  statsSection: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  statCard: { backgroundColor: '#fff', padding: 15, borderRadius: 12, alignItems: 'center', flex: 1, marginHorizontal: 5, elevation: 3 },
  statValue: { fontSize: 20, fontWeight: 'bold', color: '#0066cc' },
  statLabel: { color: '#666' },
  primaryButton: { backgroundColor: '#0066cc', padding: 15, borderRadius: 8, alignItems: 'center', marginBottom: 10 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  secondaryButton: { borderWidth: 1, borderColor: '#0066cc', padding: 15, borderRadius: 8, alignItems: 'center' },
  secondaryButtonText: { color: '#0066cc', fontWeight: 'bold' }
});