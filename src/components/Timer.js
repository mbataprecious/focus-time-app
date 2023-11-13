import react, { useState } from 'react';
import { View, StyleSheet, Text, Vibration } from 'react-native';
import { Countdown } from './CountDown';
import { RoundedButton } from './RoundedButton';
import { useKeepAwake } from 'expo-keep-awake';
import { ProgressBar } from 'react-native-paper';
import { spacing } from '../utils/sizes';
import { colors } from '../utils/colors';
import { Timing } from './Timimng';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];
export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [minutes, setMinutes] = useState(0.1);
  const [progress, setProgress] = useState(1);
  // const onEnd = () => {
  //   Vibration.vibrate(PATTERN);
  //   setProgress(1)
  //   setIsStarted(false)
  // };

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={(progress) => setProgress(progress)}
          onEnd={onEnd}
        />
        <View style={{ paddingTop: 15 }}>
          <Text style={styles.title}>Focusing on:</Text>
          <Text style={styles.text}>{focusSubject}</Text>
        </View>
      </View>
      <View style={{ paddingTop: spacing.sm, paddingBottom: spacing.xl }}>
        <ProgressBar
          progress={progress}
          color={colors.progress}
          style={{ height: 8 }}
        />
      </View>
      <View style={styles.timingContainer}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.buttonContainer}>
        {!isStarted ? (
          <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        ) : (
          <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
        )}
      </View>
      <View style={styles.clearSubjectContainer}>
        <RoundedButton size={50} title="-" onPress={clearSubject} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    // backgroundColor:"blue",
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 0.3,
    alignItems: 'center',
  },
  clearSubjectContainer: {
    alignItems: 'center',
  },
  timingContainer: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
  },
  title: {
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
  },
  text: {
    color: colors.white,
    textAlign: 'center',
  },
});
