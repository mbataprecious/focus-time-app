import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';
import { TextInput } from 'react-native-paper';
import { spacing } from '../utils/sizes';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState('');
  return (
    <View style={style.container}>
      <View style={style.inputContainer}>
        <TextInput
          style={style.textInput}
          label="this is my focus"
          value={subject}
          onChangeText={setSubject}
        />
        <View style={style.btnContainer}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {},
  inputContainer: {
    flexDirection: 'row',
    padding: spacing.sm,
    justifyContent: 'center',
  },
  textInput: {
    flex: 0.8,
    marginRight: spacing.sm,
  },
  btnContainer: {
    flex: 0.2,
    justifyContent: 'center',
  },
});
