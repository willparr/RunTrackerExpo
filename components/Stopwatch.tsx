import * as WebBrowser from 'expo-web-browser';
import React, { useEffect, useState } from 'react';
import { StyleSheet, TextStyle, TouchableOpacity } from 'react-native';
import { Card, Text} from 'react-native-elements';
import useStopwatch from '../hooks/useStopwatch';
import CenterView from '../storybook/stories/CenterView'

import { View } from './Themed';

type Size = 'small' | 'medium' | 'large' | 'xlarge'
type Weight = 'normal' | 'bold' | 'light' | 'bolder'
interface StopWatchProps {
    statName: string
    stat?: string | number
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


export default function Stopwatch(props: StopWatchProps) {
    const {statName, stat, statSize, statWeight, labelSize, labelWeight} = props
    return (
            <Card containerStyle={{alignContent: 'center'}}>
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: textSize[statSize ?? 'medium'], fontWeight: textWeight[statWeight ?? 'normal']}}>
                        {stat}
                    </Text>
                </View> 
                <Card.Title>
                    <Text style={{fontSize: textSize[labelSize ?? 'small'], fontWeight: textWeight[labelWeight ?? 'normal']}}>{statName}</Text>
                </Card.Title >
            </Card>
    );
}