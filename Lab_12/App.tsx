import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ResponsiveHeader } from './src/components/ResponsiveHeader';
import { AdaptiveLayout, FeatureCard, StatsRow, ResponsiveImage } from './src/components/AdaptiveLayout';
import { GridLayout, Card } from './src/components/GridLayout';

export default function App() {
  const statsData = [
    { label: 'Users', value: '10k+' },
    { label: 'Revenue', value: '$50k' },
    { label: 'Rating', value: '4.9' },
  ];

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        <ResponsiveHeader 
          title="Dashboard" 
          leftAction={{ icon: '☰', onPress: () => console.log('Menu') }}
          rightAction={{ icon: '⚙️', onPress: () => console.log('Settings') }}
        />
        
        <AdaptiveLayout
          content={
            <>
              <StatsRow stats={statsData} />
              <ResponsiveImage source={{ uri: 'https://via.placeholder.com/600x400' }} />
              
              <GridLayout columns={2} spacing={10}>
                <FeatureCard 
                  icon="🚀" 
                  title="Fast" 
                  description="Optimized for performance" 
                  variant="primary" 
                />
                <FeatureCard 
                  icon="🛡️" 
                  title="Secure" 
                  description="Top tier security" 
                  variant="secondary" 
                />
                <FeatureCard 
                  icon="📱" 
                  title="Responsive" 
                  description="Looks great on all screens" 
                  variant="accent" 
                />
                <FeatureCard 
                  icon="🎨" 
                  title="Beautiful" 
                  description="Modern design guidelines" 
                  variant="primary" 
                />
              </GridLayout>
            </>
          }
          footer={
            <Text style={{ textAlign: 'center', color: '#666' }}>
              © 2026 My App. All rights reserved.
            </Text>
          }
        />
      </View>
    </SafeAreaProvider>
  );
}