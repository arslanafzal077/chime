import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const SplashScreen: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 1000);
  }, []);

  return (
    <View testID="splash-screen" style={styles.container}>
      <Image source={require('../../assets/chime.png')} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#60c089',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
    // tintColor: '#61C089',
  },
});

export default SplashScreen;
