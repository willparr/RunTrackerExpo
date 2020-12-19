import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TextStyle, TouchableOpacity } from 'react-native';
import { Card, Text} from 'react-native-elements';
import CenterView from '../storybook/stories/CenterView'

import { View } from './Themed';

type Size = 'small' | 'medium' | 'large' | 'xlarge'
type Weight = 'normal' | 'bold' | 'light' | 'bolder'
interface StatBoxProps {
    statName: string
    stat: string | number
    children?: React.ReactNode
    statSize?: Size
    statWeight?: Weight
    labelWeight?: Weight
    labelSize?: Size
}

const textSize: Record<Size, number> = {
    'small': 22,
    'medium': 34,
    'large': 64,
    'xlarge': 80
}

const textWeight: Record<Weight, TextStyle['fontWeight']> = {
    'normal': 'normal',
    'bold': 'bold',
    'light': '100',
    'bolder': '700'
}


export default function StatBox(props: StatBoxProps) {
    const {statName, stat, statSize, statWeight, labelSize, labelWeight} = props
    console.debug(statName)
    console.debug(stat)
    return (
            <Card containerStyle={{alignContent: 'center', margin: 0}}>
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: textSize[statSize ?? 'medium'], fontWeight: textWeight[statWeight ?? 'normal']}}>
                        {stat.toString()}
                    </Text>
                </View>
                <Card.Title>
                    <Text style={{fontSize: textSize[labelSize ?? 'small'], fontWeight: textWeight[labelWeight ?? 'normal']}}>{statName}</Text>
                </Card.Title >
            </Card>
    );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}