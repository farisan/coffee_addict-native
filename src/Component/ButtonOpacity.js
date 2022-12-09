import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const FancyButton = ({
  text,
  color,
  onPressHandler: {onPressIn, onPressOut, onLongPress, onPress},
  radius,
  colorText,
  width,
  height,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onLongPress={onLongPress}
      activeOpacity={0.5}
      style={{
        backgroundColor: color,
        height: height,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: radius,
      }}>
      <Text
        style={{
          color: colorText,
          fontFamily: 'Poppins',
          fontSize: 17,
          fontWeight: 'bold',
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default FancyButton;
