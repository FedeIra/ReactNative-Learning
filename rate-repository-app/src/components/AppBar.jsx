import React from 'react';
import { View, StyleSheet } from 'react-native';
import StyledText from './StyledText.jsx';
import Constants from 'expo-constants';
import theme from './theme.js';

const AppBar = () => {
  return (
    <View style={styles.container}>
      <StyledText fontSize="bold" style={styles.text}>
        Repositories
      </StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: theme.appBar.primary,
    paddingBottom: 10,
    paddingTop: 10,
  },
  text: {
    color: theme.appBar.textPrimary,
    alignSelf: 'center',
    marginRight: '50%',
  },
});

export default AppBar;
