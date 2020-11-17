/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import {AirbnbRating} from 'react-native-elements';
import HeaderCustom from '../../components/HeaderCustom';

const FeedBack = () => {
  return (
    <View style={{flex: 1}}>
      <HeaderCustom />
      <View>
        <View style={styles.container}>
          <Text style={styles.titleCenter}>
            Silahkan berikan Penilaian pada Pelayanan kami
          </Text>
          <AirbnbRating
            count={5}
            defaultRating={4}
            reviews={['Terrible', 'Bad', 'Okay', 'Good', 'Great']}
            onFinishRating={() => console.log('onFinishRating()')}
            showRating
          />
          <Text style={styles.titleLable}>Saran</Text>
          <TextInput style={styles.inputBig} />
          <Button onPress="cons" title="Submit" color="#009ED6" />
        </View>
      </View>
    </View>
  );
};

export default FeedBack;

const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 460,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
    marginTop: 20,
  },
  titleCenter: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
  titleLable: {
    color: '#656565',
    alignSelf: 'flex-start',
    marginLeft: 40,
    fontSize: 10,
    marginBottom: 5,
  },
  input: {
    height: 40,
    width: 240,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#b8b8b8',
    marginBottom: 10,
  },
  inputBig: {
    height: 120,
    width: 240,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#b8b8b8',
    marginBottom: 10,
  },
});
