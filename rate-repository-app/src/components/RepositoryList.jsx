import React from 'react';
import { View, Text, FlatList } from 'react-native';
import repositories from '../data/repositories.js';

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      /* separate items: */
      ItemSeparatorComponent={() => (
        <Text>
          _______________________________________________________________
        </Text>
      )}
      /* for scrolling through list */
      renderItem={({ item: repo }) => (
        <View
          key={repo.id}
          style={{
            padding: 20,
            paddingBottom: 5,
            paddingTop: 5,
          }}
        >
          <Text
            style={{
              fontWeight: 'bold',
              marginBottom: 5,
            }}
          >
            id: {repo.id}
          </Text>
          <Text>fullname: {repo.fullName}</Text>
          <Text>description: {repo.description}</Text>
          <Text>language: {repo.language}</Text>
          <Text>stargazersCount: {repo.stargazersCount}</Text>
          <Text>forksCount: {repo.forksCount}</Text>
          <Text>reviewCount: {repo.reviewCount}</Text>
          <Text>ratingAverage: {repo.ratingAverage}</Text>
        </View>
      )}
    />
  );
};

export default RepositoryList;
