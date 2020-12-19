import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React, { useEffect, useState } from 'react';
import StatBox from '../../../components/StatBox';
import { View } from '../../../components/Themed';
import CenterView from '../CenterView'; 
import {FlatGrid} from 'react-native-super-grid'
import useStopwatch from '../../../hooks/useStopwatch';
import Stopwatch from '../../../components/Stopwatch';

const stat = "12.45"
const statName = "Speed"
interface StatOptions {
    stat: string | number,
    statName: string
}
const stats = [{stat, statName}, {stat, statName},{stat, statName},{stat, statName}]

storiesOf('Stopwatch', module)
.add('stopwatch', () => {
    return(
      <View style={{flex: 1}}>
          <Stopwatch statName={"Time"} labelSize={"xlarge"}/>
      </View>
    )
})