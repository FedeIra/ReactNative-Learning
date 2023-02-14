import React from 'react';
import { Image, View, StyleSheet, Platform } from 'react-native';
import RepositoryStats from './RepositoryStats';
import StyledText from './StyledText.jsx';
import theme from './theme.js';

const RepositoryItemHeader = ({
  ownerAvatarUrl,
  fullName,
  description,
  language,
}) => (
  <View
    style={{
      flexDirection: 'row',
      paddingBottom: 2,
    }}
  >
    <View
      style={{
        paddingRight: 10,
      }}
    >
      <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
    </View>

    <View
      style={{
        flex: 1,
      }}
    >
      <StyledText fontWeight='bold'>{fullName}</StyledText>
      <StyledText color='secondary'>{description}</StyledText>
      <StyledText style={styles.language}>{language}</StyledText>
    </View>
  </View>
);

const RepositoryItem = (props) => (
  <View key={props.id} style={styles.container}>
    <RepositoryItemHeader {...props} />
    <RepositoryStats {...props} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: 4,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
});

export default RepositoryItem;
