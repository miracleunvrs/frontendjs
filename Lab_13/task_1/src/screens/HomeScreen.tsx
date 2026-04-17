import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome back,</Text>
        <Text style={styles.userName}>John Doe</Text>

        <View style={styles.actionsSection}>
          <TouchableOpacity 
            style={styles.primaryButton}
            onPress={() => navigation.navigate('Profile', { userId: '123' })}
          >
            <Text style={styles.buttonText}>View Profile (ID: 123)</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.secondaryButton}
            onPress={() => navigation.navigate('Settings')}
          >
            <Text style={styles.secondaryButtonText}>Go to Settings</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  content: { padding: 20, flex: 1, justifyContent: 'center' },
  welcomeText: { fontSize: 16, color: '#666', textAlign: 'center' },
  userName: { fontSize: 28, fontWeight: 'bold', marginBottom: 40, textAlign: 'center' },
  actionsSection: { gap: 15 },
  primaryButton: { backgroundColor: '#0066cc', padding: 16, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: '600', fontSize: 16 },
  secondaryButton: { borderWidth: 1, borderColor: '#0066cc', padding: 16, borderRadius: 8, alignItems: 'center' },
  secondaryButtonText: { color: '#0066cc', fontWeight: '600', fontSize: 16 }
});