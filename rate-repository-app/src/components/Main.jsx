import React from 'react';
import Constants from 'expo-constants';
import { View, Text } from 'react-native';

const Main = () => {
  return (
    <View
      style={{
        marginTop: Constants.statusBarHeight,
        flexGrow: 1,
      }}
    >
      <Text>Rate Repository Application</Text>
    </View>
  );
};

export default Main;
