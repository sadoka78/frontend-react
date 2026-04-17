import React from 'react';
import { Alert, Text, View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GridLayout, Card } from './src/components/GridLayout';
import {
  ResponsiveHeader,
  ResponsiveContainer,
} from './src/components/ResponsiveHeader';
import {
  AdaptiveLayout,
  FeatureCard,
  StatsRow,
  ResponsiveImage,
} from './src/components/AdaptiveLayout';

export default function App() {
  return (
    <SafeAreaProvider>
      <ResponsiveHeader
        title="Project 2 Step 5"
        leftAction={{
          icon: '←',
          onPress: () => Alert.alert('Back pressed'),
        }}
        rightAction={{
          icon: '⋯',
          onPress: () => Alert.alert('Menu opened'),
        }}
      />

      <ResponsiveContainer>
        <AdaptiveLayout
          header={
            <Text style={styles.sectionHeading}>Responsive Styling Demo</Text>
          }
          content={
            <>
              <StatsRow
                stats={[
                  { label: 'Users', value: '1.2K' },
                  { label: 'Views', value: '8.4K' },
                  { label: 'Sales', value: '324' },
                ]}
              />

              <ResponsiveImage source={{ uri: 'placeholder' }} />

              <FeatureCard
                icon="📱"
                title="Phone Layout"
                description="Content adapts to smaller screens with clean spacing and vertical flow."
                variant="primary"
              />
              <FeatureCard
                icon="📐"
                title="Flexbox Grid"
                description="Cards below are arranged using a responsive grid layout."
                variant="secondary"
              />
              <FeatureCard
                icon="💡"
                title="Adaptive Design"
                description="Tablet and landscape views use a more spacious layout."
                variant="accent"
              />

              <View style={styles.gridWrapper}>
                <GridLayout columns={2} spacing={12}>
                  <Card title="Analytics" subtitle="Overview">
                    <Text style={styles.cardText}>Sessions: 420</Text>
                    <Text style={styles.cardText}>Growth: +12%</Text>
                  </Card>

                  <Card title="Orders" subtitle="This week">
                    <Text style={styles.cardText}>Completed: 83</Text>
                    <Text style={styles.cardText}>Pending: 14</Text>
                  </Card>

                  <Card title="Messages" subtitle="Inbox">
                    <Text style={styles.cardText}>Unread: 7</Text>
                    <Text style={styles.cardText}>Archived: 120</Text>
                  </Card>

                  <Card title="Profile" subtitle="Account info">
                    <Text style={styles.cardText}>Status: Active</Text>
                    <Text style={styles.cardText}>Plan: Premium</Text>
                  </Card>
                </GridLayout>
              </View>
            </>
          }
          footer={
            <Text style={styles.footerText}>
              Responsive footer • React Native • Flexbox
            </Text>
          }
        />
      </ResponsiveContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  sectionHeading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#ffffff',
  },
  gridWrapper: {
    marginTop: 8,
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  footerText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});