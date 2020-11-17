import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {Header} from 'react-native-elements';
import logo from '../../assets/logo.png';

const HeaderCustom = () => {
  return (
    <Header containerStyle={styles.header}>
      <Image source={logo} style={{width: 90, height: 25}} />
    </Header>
  );
};
export default HeaderCustom;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    padding: 0,
    shadowOffset: {
      width: -5,
      height: 3,
    },
    shadowOpacity: 6,
    shadowRadius: 8,

    elevation: 10,
  },
});
