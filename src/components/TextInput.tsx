import React, {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TextInputProps,
  Text,
  TouchableOpacity,
  Image,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
const openEye = require('../assets/open-eye.png');
const closeEye = require('../assets/close-eye.png');

interface CustomTextInputProps extends TextInputProps {
  error?: string | boolean;
  isPassword?: boolean;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  error,
  isPassword,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(false);

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);
    props.onBlur && props.onBlur(e); // Call onBlur prop if provided
  };

  return (
    <View>
      <View
        style={[
          styles.container,
          {
            borderBottomColor: error
              ? 'red'
              : isFocused
              ? '#397E45'
              : '#707070',
          },
          (isFocused || error) && styles.underLine,
        ]}>
        <TextInput
          {...props}
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
          secureTextEntry={secureTextEntry}
          style={styles.input}
        />
        {isPassword && (
          <TouchableOpacity activeOpacity={0.9} onPress={toggleSecureTextEntry}>
            <Image
              source={secureTextEntry ? closeEye : openEye}
              style={[styles.icon, !secureTextEntry && {tintColor: '#397E45'}]}
            />
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <Text testID={`${props.testID}-error`} style={styles.errorMessage}>
          {error}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  input: {
    fontSize: 16,
    paddingVertical: 8,
    paddingTop: 15,
  },
  errorMessage: {
    color: 'red',
    marginTop: 5,
  },
  underLine: {
    borderBottomWidth: 2,
  },
  icon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
});

export default CustomTextInput;
