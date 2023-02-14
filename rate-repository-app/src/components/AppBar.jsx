import React from 'react';
import { View, StyleSheet } from 'react-native';
import StyledText from './StyledText.jsx';
import Constants from 'expo-constants';
import theme from './theme.js';
import { Link } from 'react-router-native';

const AppBarTab = ({ active, children, to }) => {
  return (
    <Link to={to}>
      <StyledText fontWeight='bold' style={styles.text}>
        {children}
      </StyledText>
    </Link>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab active={true} to='/'>
        Repositories
      </AppBarTab>
      <AppBarTab active={true} to='/signin'>
        Sign In
      </AppBarTab>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: theme.appBar.primary,
    paddingBottom: 30,
    paddingTop: 40,
    flexDirection: 'row',
  },
  text: {
    color: theme.appBar.textPrimary,
    paddingHorizontal: 10,
  },
});

export default AppBar;
