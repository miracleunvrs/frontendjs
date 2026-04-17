import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export default function ProfileScreen({ route }: Props) {
  const { userId } = route.params || { userId: 'Guest' };
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.avatarPlaceholder}>
          <Text style={styles.avatarText}>J</Text>
        </View>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.bio}>Mobile developer passionate about React Native.</Text>
        <Text style={styles.infoLabel}>User ID: {userId}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  content: { alignItems: 'center', padding: 20 },
  avatarPlaceholder: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#0066cc', justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
  avatarText: { color: '#fff', fontSize: 40, fontWeight: 'bold' },
  name: { fontSize: 24, fontWeight: 'bold' },
  bio: { textAlign: 'center', color: '#666', marginVertical: 10 },
  infoLabel: { color: '#999', marginTop: 20 }
});