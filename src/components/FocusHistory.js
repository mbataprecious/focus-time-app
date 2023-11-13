import React from 'react';
import { View, Text,StyleSheet,FlatList } from 'react-native';
import {colors} from "../utils/colors"
import {spacing} from "../utils/sizes"


const myItem=({item})=><Text style={styles.item}>- {item}</Text>

export const FocusHistory = ({ history }) => {
  if(!history || !history.length) return null
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is the focus history</Text>
      <FlatList data={history} renderItem={myItem} />
    </View>
  );
};

const styles=StyleSheet.create({
  container:{
     padding:spacing.md,
     flex:1
  },
  item:{
    color:colors.white,
    paddingTop:spacing.sm
  },
  title:{
    color:colors.white,
    fontSize:spacing.lg,
  }
})