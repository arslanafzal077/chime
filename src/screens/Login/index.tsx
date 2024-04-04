import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  Pressable,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import ErrorModal from '../../components/ErrorModal';
import CustomTextInput from '../../components/TextInput';
import CustomButton from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {loginValidationSchema} from '../../validations';

interface FormValues {
  email: string;
  password: string;
}

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false); // State for error modal visibility

  const initialValues: FormValues = {
    email: '',
    password: '',
  };

  const handleLogin = (values: FormValues) => {
    setIsLoading(true);

    if (values.email == 'test@email.com' && values.password === 'test1234') {
      setIsLoading(false);
      navigation.navigate('Home');
      return;
    }
    // Simulating login request
    setTimeout(() => {
      setIsLoading(false);
      setErrorModalVisible(true); // Show error modal
    }, 2000);
  };

  const handleTryAgain = () => {
    setErrorModalVisible(false); // Hide error modal on "Try Again" press
  };

  return (
    <SafeAreaView testID="loginScreen" style={{flex: 1}}>
      <Pressable onPress={() => navigation.goBack()}>
        <Image
          source={require('../../assets/back-arrow.png')}
          style={styles.arrow}
        />
      </Pressable>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.appTitleContainer}>
          <Image
            source={require('../../assets/chime.png')}
            style={styles.icon}
          />
        </View>
        <Formik
          initialValues={initialValues}
          validationSchema={loginValidationSchema}
          onSubmit={handleLogin}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={styles.form}>
              <View style={styles.inputContainer}>
                <CustomTextInput
                  testID="email-input"
                  placeholder="Email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  error={touched.email && errors.email}
                />

                <CustomTextInput
                  testID="password-input"
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  error={touched.password && errors.password}
                  isPassword
                />
                <Text style={styles.needHelpText}>Need help?</Text>
                <Text style={styles.desc}>
                  By clicking "Log in" you are agree to recieve SMS text
                  messages from chime to verify your identity.
                </Text>
              </View>
              <CustomButton
                testID={'login-button'}
                onPress={handleSubmit}
                title={'Log in'}
                isLoading={isLoading}
                containerStyle={styles.btn}
                disabled={
                  touched.email &&
                  touched.password &&
                  !errors.email &&
                  !errors.password
                    ? false
                    : true
                }
              />
              <ErrorModal
                testID="error-modal"
                isVisible={errorModalVisible}
                title="Yikes!"
                message="Email and password combination do not match our records."
                onTryAgainPress={handleTryAgain}
              />
            </View>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  arrow: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  appTitleContainer: {
    alignItems: 'center',
  },
  icon: {
    height: 80,
    width: 80,
    marginTop: 15,
    resizeMode: 'contain',
    tintColor: '#61C089',
  },
  form: {
    flex: 1,
  },
  btn: {
    marginTop: 90,
  },
  inputContainer: {
    paddingHorizontal: 20,
  },
  needHelpText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#38804A',
    textAlign: 'center',
    marginVertical: 25,
  },
  desc: {
    textAlign: 'center',
    color: '#797A79',
  },
});

export default LoginScreen;
