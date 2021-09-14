import React from 'react';
import {SafeAreaView, Image, TouchableOpacity, Text} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Skip = ({...props}) => (
    <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
      <Text style={{fontSize: 16, color: '#000'}}>Atla</Text>
    </TouchableOpacity>
  );
  
  const Next = ({...props}) => (
    <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
      <Text style={{fontSize: 16, color: '#000'}}>İleri</Text>
    </TouchableOpacity>
  );
  
  const Done = ({...props}) => (
    <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
      <Text style={{fontSize: 16, color: '#000'}}>Bitti</Text>
    </TouchableOpacity>
  );
export const BoardingScreen = ({navigation}) => {
  return (
    <Onboarding
    SkipButtonComponent={Skip}
    NextButtonComponent={Next}
    DoneButtonComponent={Done}
    onSkip={() => navigation.navigate('Login')}
    onDone={() => navigation.navigate('Login')}
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={require('../Medias/1.png')} style = {{height:'100%', width:'100%'}}/>,
          //   title: 'Onboarding',
          //   subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../Medias/2.png')}  style = {{height:'100%', width:'100%'}}/>,
          //   title: 'Onboarding',
          //   subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../Medias/3.png')} style = {{height:'100%', width:'100%'}} />,
          //   title: 'Onboarding',
          //   subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
    />
  );
};
