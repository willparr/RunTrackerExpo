import * as React from 'react';
import { StyleSheet } from 'react-native';

import {LiveTrackingScreen} from '../components/LiveTrackingScreen';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
      <LiveTrackingScreen path="/screens/TabOneScreen.tsx" />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
