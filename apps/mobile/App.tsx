import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const App: React.FC = () => (
  <SafeAreaView style={styles.container}>
    <Text>JKBX</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;