import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Text,
  View,
} from 'react-native';
import { Focus } from './src/features/Focus';
import { FocusHistory } from './src/components/FocusHistory';
import { colors } from './src/utils/colors';
import { spacing } from './src/utils/sizes';
import { Timer } from './src/components/Timer';

export default function App() {
  const [subject, setSubject] = useState('');
  const addSubject = (subject) => setSubject(subject);
  const [history, setHistory] = useState(["the boy is good","reading physics","going to the bath room"]);
  return (
    <SafeAreaView style={styles.container}>
      {!subject ? (
        <>
          <Focus addSubject={addSubject} />
          <FocusHistory history={history} />
        </>
      ) : (
        <Timer
          focusSubject={subject}
          onTimerEnd={(subject) => {
            console.log("on timer end is called")
            setHistory(history=>([...history,subject]))}}
          clearSubject={() => {
            console.log("THE SUBJECT IS CLEARED")
            setSubject('');
          }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        // paddingTop: Platform.OS === 'ios' ? spacing.md : spacing.lg,
    backgroundColor: colors.darkBlue,
  },
});
