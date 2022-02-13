import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';

import Svg, {Circle, Rect} from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../../styles/Colors';

// y = distancia do topo - 0 = topo / 50 = base
// height = distanciada base - 0 = base / 50 = topo

const EntryListItem = ({entry, isFirstItem, isLastItem, onEntryPress}) => {
  const bulletLineY = isFirstItem ? 25 : 0;
  const bulletLineHeight = isLastItem ? 30 : 50;
  const showBulletLine = !(isFirstItem && isLastItem);
  //const bulletColor = entry.category.color || Colors.white;
  const bulletColor = Colors.white;

  return (
    <TouchableOpacity onPress={() => onEntryPress && onEntryPress(entry)}>
      <View style={styles.container}>
        <View style={styles.bullet}>
          <Svg height="50" width="30">
            {showBulletLine && (
              <Rect
                x="9.5"
                y={bulletLineY}
                width="1.5"
                height={bulletLineHeight}
                fill={Colors.background}
              />
            )}
            <Circle
              cx="10"
              cy="25"
              r="8"
              fill={bulletColor}
              stroke={Colors.background}
              strokeWidth="1.5"
            />
          </Svg>
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionText}>{entry.description}</Text>

          <View style={styles.details}>
            <Icon style={styles.entryAtIcon} name="access-time" size={12} />
            <Text style={styles.entryAtText}>{entry.entryAt}</Text>
            {entry.address && (
              <>
                <Icon style={styles.addressIcon} name="person-pin" size={12} />
                <Text style={styles.addressText}>{entry.address}</Text>
              </>
            )}
          </View>
        </View>
        <View style={styles.amount}>
          <Text style={styles.amountText}>{entry.amount}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EntryListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  bullet: {},
  description: {
    flex: 1,
    justifyContent: 'center',
  },
  descriptionText: {
    fontSize: 14,
    color: Colors.white,
  },
  details: {
    flexDirection: 'row',
  },
  entryAtIcon: {
    color: Colors.metal,
    marginTop: 2,
    marginRight: 2,
  },
  entryAtText: {
    fontSize: 12,
    color: Colors.metal,
  },
  addressIcon: {
    color: Colors.metal,
    marginTop: 2,
    marginRight: 2,
    marginLeft: 5,
  },
  addressText: {
    color: Colors.metal,
  },
  amount: {
    justifyContent: 'center',
  },
  amountText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.white,
  },
});
