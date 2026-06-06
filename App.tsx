import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { db } from './src/database/Schema';
import { awsSyncManager } from './src/core/AWSSyncManager';

export default function App() {
  useEffect(() => {
    // Initialize Database on App Start
    db.init().then(() => {
      // Start AWS Sync listener only after DB is ready
      awsSyncManager.init();
    }).catch(console.error);
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#111827" />
      <AppNavigator />
    </SafeAreaProvider>
  );
}
