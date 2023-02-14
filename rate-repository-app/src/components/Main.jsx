import React from 'react';
import { View, Text } from 'react-native';
import RepositoryList from './RepositoryList.jsx';
import AppBar from './AppBar'; /* i remove .jsx extension so it can use AppBar.ios / android / default */
import { Route, Routes } from 'react-router-native';

const Main = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <AppBar />
      <Routes>
        <Route path='/' exact element={<RepositoryList />}></Route>
        <Route
          path='/signin'
          exact
          element={<Text>Working on it</Text>}
        ></Route>
      </Routes>
    </View>
  );
};

export default Main;
