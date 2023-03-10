import React from 'react';
import { Text, FlatList } from 'react-native';
/* import repositories from '../data/repositories.js'; */
import RepositoryItem from './RepositoryItem.jsx';
import useRepositories from '../hooks/useRepositories.js';

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return (
    <FlatList
      data={repositories}
      /* separate items: */
      ItemSeparatorComponent={() => <Text></Text>}
      /* for scrolling through list */
      renderItem={({ item: repo }) => <RepositoryItem {...repo} />}
    />
  );
};

export default RepositoryList;
