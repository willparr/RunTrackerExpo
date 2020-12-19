import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import CenterView from '../storybook/stories/CenterView'

import { Text, View } from './Themed';

interface StatBoxProps {
    statName: string
    stat: string | number
    children?: React.ReactNode

}


export default function StatBox(props: StatBoxProps) {
    const {statName, stat} = props
    return (
        <View style={{flex: 1, borderColor: 'blue',
        borderWidth: 1}}>
            <Card wrapperStyle={{alignContent: 'center'}}>
                <Card.Title>
                    <Text>{statName}</Text>
                </Card.Title >
                <CenterView>
                    <Text>
                        {stat}
                    </Text>
                </CenterView>
            </Card>
        </View>
    );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}