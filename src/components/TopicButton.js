import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const TopicButton = () => {
  return (
    <FlatList
      data={[
        { key: 'Topic 1' },
        { key: 'Topic 2' },
        { key: 'Topic 3' },
        { key: 'Topic 4' },
        { key: 'Topic 5' },
      ]}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.topicButton}>
          <Text style={styles.topicButtonText}>{item.key}</Text>
        </TouchableOpacity>
      )}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  topicButton: {
    backgroundColor: 'lightblue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
    borderRadius: 20,
  },
  topicButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TopicButton;
