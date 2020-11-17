import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.contentCard}>
      <Image source={props.img} />
      <Text style={styles.contentTitle}>{props.title}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  contentCard: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    height: 140,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: -5,
      height: 3,
    },
    shadowOpacity: 6,
    shadowRadius: 8,

    elevation: 10,
  },
});
