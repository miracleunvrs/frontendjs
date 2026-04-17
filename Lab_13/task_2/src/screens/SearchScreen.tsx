import React from 'react';
import { View, Text, StyleSheet, TextInput, SafeAreaView } from 'react-native';

export default function SearchScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Search</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#999"
        />
        <Text style={styles.hint}>Start typing to search</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  content: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  searchInput: { backgroundColor: '#fff', padding: 15, borderRadius: 8, fontSize: 16, marginBottom: 15 },
  hint: { color: '#999', textAlign: 'center' }
});
