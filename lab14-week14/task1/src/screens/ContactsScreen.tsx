import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  RefreshControl,
  Alert,
} from 'react-native';
import { generateContacts } from '../utils/mockData';
import { Contact } from '../types';

const ITEM_HEIGHT = 80;

export default function ContactsScreen() {
  const [contacts, setContacts] = useState<Contact[]>(generateContacts(1000));
  const [refreshing, setRefreshing] = useState(false);

  const renderItem = useCallback(({ item }: { item: Contact }) => (
    <TouchableOpacity
      style={styles.contactItem}
      onPress={() => Alert.alert('Selected', item.email)}
      activeOpacity={0.7}
    >
      <View style={[styles.avatar, { backgroundColor: item.avatarColor }]}>
        <Text style={styles.avatarText}>
          {item.firstName[0]}
          {item.lastName[0]}
        </Text>
      </View>

      <View style={styles.contactDetails}>
        <Text style={styles.contactName}>
          {item.firstName} {item.lastName}
        </Text>
        <Text style={styles.contactEmail}>{item.email}</Text>
      </View>
    </TouchableOpacity>
  ), []);

  const keyExtractor = useCallback((item: Contact) => item.id, []);

  const getItemLayout = useCallback(
    (_data: ArrayLike<Contact> | null | undefined, index: number) => ({
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index,
      index,
    }),
    []
  );

  const renderSeparator = () => <View style={styles.separator} />;

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>University Directory</Text>
      <Text style={styles.headerSubtitle}>Total: {contacts.length} Users</Text>
    </View>
  );

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    setTimeout(() => {
      setContacts(generateContacts(1000));
      setRefreshing(false);
    }, 1500);
  }, []);

  const renderEmpty = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyTitle}>No contacts found</Text>
      <Text style={styles.emptySubtitle}>Pull down to refresh the dataset</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
        ItemSeparatorComponent={renderSeparator}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={renderEmpty}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#0066cc"
          />
        }
        initialNumToRender={15}
        maxToRenderPerBatch={10}
        windowSize={5}
        removeClippedSubviews={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  contactItem: {
    height: ITEM_HEIGHT,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  avatarText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  contactName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  contactEmail: {
    fontSize: 13,
    color: '#777',
  },
  separator: {
    height: 1,
    backgroundColor: '#f0f0f0',
    marginLeft: 85,
  },
  emptyContainer: {
    padding: 40,
    alignItems: 'center',
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },
  emptySubtitle: {
    fontSize: 14,
    color: '#777',
    marginTop: 8,
    textAlign: 'center',
  },
});