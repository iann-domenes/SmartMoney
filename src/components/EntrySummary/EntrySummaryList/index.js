import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const EntrySummaryList = ({entriesGrouped}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={entriesGrouped}
        renderItem={({item}) => (
          <Text>
            - {item.description} - ${item.amount}
          </Text>
        )}
      />
    </View>
  );
};

export default EntrySummaryList;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
