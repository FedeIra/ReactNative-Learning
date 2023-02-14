import React from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import StyledText from './StyledText.jsx';
import Constants from 'expo-constants';
import theme from './theme.js';
import { Link, useLocation } from 'react-router-native';

const AppBarTab = ({ children, to }) => {
  const { pathname } = useLocation();
  const active = pathname === to;
  const textStyles = [styles.text, active && styles.active];

  return (
    <Link to={to} component={TouchableWithoutFeedback}>
      <StyledText fontWeight='bold' style={textStyles}>
        {children}
      </StyledText>
    </Link>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal styles={styles.scroll}>
        <AppBarTab active to='/'>
          Repositories
        </AppBarTab>
        <AppBarTab to='/signin'>Sign In</AppBarTab>
        <AppBarTab to='/register'>Register</AppBarTab>
        <AppBarTab to='/github'>GitHub</AppBarTab>
        <AppBarTab to='/linkedin'>LinkedIn</AppBarTab>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: theme.appBar.primary,
    paddingBottom: 15,
    flexDirection: 'row',
  },
  scroll: {
    paddingBottom: 15,
  },
  text: {
    color: theme.appBar.textSecondary,
    paddingHorizontal: 10,
  },
  active: {
    color: theme.appBar.textPrimary,
  },
});

export default AppBar;
