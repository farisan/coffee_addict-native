import { StyleSheet, View, Image,SafeAreaView,ScrollView,TextInput} from 'react-native'
import React, { useState } from 'react'
import icon_girl from "../assets/get_start/icon_girl.png";
import ButtonOpacity from '../components/ButtonOpacity';

const Register = ({navigation}) => {
        // const [email, setStateEmail] = useState();
        // const [password, setStatePassword] = useState();
        // const [phone, setStatePhone] = useState();
  return (
    <SafeAreaView>
      <ScrollView>
    <View style={styles.content_all}>
      <Image source={icon_girl} style={styles.image}/>
      {/* <Button onPress={() => navigation.navigate('Splash')} title="Splash" /> */}
      <TextInput
        style={styles.input}
        placeholder="Enter your email adress"
        keyboardType='text'
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        keyboardType='password'
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        keyboardType="numeric"
      />
      <ButtonOpacity  color={'#6a4029'}
            text="Create New Account"
            radius={20}
            colorText="white"
            height={60}
            width={`90%`}
            marginBottom={20}
            marginTop={20}
            onPressHandler={{
              onPress: () => navigation.navigate('Register'),
              onPressIn: () => console.log('Pressed In'),
              onPressOut: () => console.log('Pressed Out'),
              onLongPress: () => navigation.popToTop(),
            }} />
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};


export default Register; 

const styles = StyleSheet.create({
  content_all: {
    alignItems: 'center',
    // flex: 1,
    // paddingHorizontal: 40,
    paddingTop: 50,
    justifyContent: 'center',
  },
  input: {
    width: `90%`,
    fontSize: 14,
    fontFamily: 'Poppins',
    outlineWidth: 4,
    height: 40,
    margin: 12,
    borderWidth: 0,
    borderBottomWidth: 0.2,
    padding: 10,
  },
  image: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
});
