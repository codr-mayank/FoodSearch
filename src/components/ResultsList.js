import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultsList = ({ title }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default ResultsList;
