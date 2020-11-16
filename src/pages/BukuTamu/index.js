import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import {Header} from 'react-native-elements';
import {WebView} from 'react-native-webview';
import logo from '../../assets/logo.png';

const Homepage = () => {
  return (
    <ScrollView>
      <Header containerStyle={styles.header}>
        <Image source={logo} style={{width: 90, height: 25}} />
      </Header>
      <View>
        <View>
          <Text style={styles.titleHeading}>Profil</Text>
          <View style={styles.profilContainer}>
            <WebView
              javaScriptEnabled={true}
              source={{
                uri:
                  'https://www.youtube.com/embed/ocuoAiOO1-A?rel=0&autoplay=0&showinfo=0&controls=0 ',
              }}
            />
          </View>

          <Text style={styles.titleHeading}>Layanan</Text>
          <View style={styles.contentContainer}>
            <View style={styles.contentCard}>
              <Image source={require('../../assets/icon/icons-bookmark.png')} />
              <Text style={styles.contentTitle}>Buku Tamu</Text>
            </View>
            <View style={styles.contentCard}>
              <Image source={require('../../assets/icon/icons-bookmark.png')} />
              <Text style={styles.contentTitle}>Buku Tamu</Text>
            </View>
            <View style={styles.contentCard}>
              <Image source={require('../../assets/icon/icons-bookmark.png')} />
              <Text style={styles.contentTitle}>Buku Tamu</Text>
            </View>
            <View style={styles.contentCard}>
              <Image source={require('../../assets/icon/icons-bookmark.png')} />
              <Text style={styles.contentTitle}>Buku Tamu</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Homepage;

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
  profilContainer: {
    width: 310,
    height: 175,
    backgroundColor: '#f0f0f0',
    borderRadius: 100,
    alignSelf: 'center',
  },
  titleHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 16,
    marginVertical: 16,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
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
  contentTitle: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: '900',
  },
});
