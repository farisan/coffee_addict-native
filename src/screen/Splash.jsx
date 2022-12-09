import {Text, View, Image, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import image from '../assets/splash/get_started.png';
import styles from '../style/Splash';
import ButtonOpacity from '../components/ButtonOpacity';
const Splash = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title_center}>Coffee for Everyone</Text>
          <Image source={image} style={styles.image} />
          {/* <TouchableOpacity
            style={styles.btn_start_bar}
            onPress={() => navigation.navigate('Get_Start')}>
            <Text style={styles.btn_text}>Get Started</Text>
          </TouchableOpacity> */}
          <ButtonOpacity
            color={'#6a4029'}
            text="Get Started"
            radius={20}
            colorText="white"
            height={70}
            width={`90%`}
            onPressHandler={{
              onPress: () => navigation.navigate('Get_Start'),
              onPressIn: () => console.log('Pressed In'),
              onPressOut: () => console.log('Pressed Out'),
              onLongPress: () => navigation.popToTop(),
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Splash;
