import { useNavigation } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import React, { useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { FlatGrid } from 'react-native-super-grid';

import Colors from '../constants/Colors';
import useLocationTracking from '../hooks/useLocationTracking';
import useStopwatch from '../hooks/useStopwatch';
import StatBox from './StatBox';
import Stopwatch from './Stopwatch';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

const stats = [{stat: 12.53, statName: "SPEED"}, {stat: 11.3, statName: "AVG SPEED"}]


export default function EditScreenInfo({ path }: { path: string }) {
  const {startTracking, stopTracking, isActive} = useLocationTracking()
  const {start, pause, timer, getFormattedTime} = useStopwatch()
  const navigation = useNavigation();

  const startButton = <Icon onPress={() => {start(); startTracking();}} size={100} name="play-circle" type="font-awesome-5"></Icon>
  const pauseButton = <Icon onPress={() => {pause(); stopTracking();}} size={100} name="pause-circle" type="font-awesome-5"></Icon> //fix this to be useRunTracking 

  useEffect(() => {
    start()
    startTracking()
  },[])

  return (
    <View style={{flex: 1, flexGrow: 1, marginTop:40, flexDirection: 'column', justifyContent: 'space-between'}}>
      <Stopwatch stat={getFormattedTime()} statWeight={"bolder"} statSize={"large"} statName={"TIME"}></Stopwatch>
      <StatBox statWeight={"bolder"} statSize={"xlarge"} statName={"DISTANCE"} stat={2.43}/>
      <StatBox statWeight={"bolder"} statSize={"large"} statName={"SPEED"} stat={12.41}/>
      <StatBox statWeight={"bolder"} statSize={"large"} statName={"AVG SPEED"} stat={10.98}/>
      {isActive ? pauseButton : startButton}
      <Button type="solid" title="Stop Run" onPress={(e) => navigation.navigate('TabTwo')}></Button>
    </View>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
