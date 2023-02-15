import React from 'react';
import { View, Text } from 'react-native';
import RepositoryList from './RepositoryList.jsx';
import AppBar from './AppBar'; /* i remove .jsx extension so it can use AppBar.ios / android / default */
import { Route, Routes } from 'react-router-native';
import LogInPage from '../pages/LogIn.jsx';

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
        <Route path='/signin' exact element={<LogInPage />}></Route>
      </Routes>
    </View>
  );
};

export default Main;
