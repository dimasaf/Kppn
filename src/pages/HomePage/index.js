import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import Card from '../../components/Card';
import HeaderCustom from '../../components/HeaderCustom';

const Homepage = () => {
  return (
    <ScrollView>
      <HeaderCustom />
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
            <Card
              title="Buku tamu"
              img={require('../../assets/icon/icons-bookmark.png')}
            />
            <Card
              title="Penilaian"
              img={require('../../assets/icon/icons-bookmark.png')}
            />
            <Card
              title="Next"
              img={require('../../assets/icon/icons-bookmark.png')}
            />
            <Card
              title="Next 2"
              img={require('../../assets/icon/icons-bookmark.png')}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  profilContainer: {
    width: 310,
    height: 175,
    backgroundColor: '#f0f0f0',
    borderRadius: 14,
    alignSelf: 'center',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 2,
    shadowRadius: 10,

    elevation: 2,
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
  contentTitle: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: '900',
  },
});
