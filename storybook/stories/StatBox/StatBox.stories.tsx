import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import StatBox from '../../../components/StatBox';
import { View } from '../../../components/Themed';
import CenterView from '../CenterView'; 
import {FlatGrid} from 'react-native-super-grid'

const stat = "12.45"
const statName = "Speed"
interface StatOptions {
    stat: string | number,
    statName: string
}
const stats = [{stat, statName}, {stat, statName},{stat, statName},{stat, statName}]
storiesOf('StatBox', module)
  .add('with text', () => (
      <StatBox statName={statName} stat={1.5}/>
  ))
  .add('multiple stats', () => (
      <View style={{flex: 1}}>
          <StatBox statName={statName} stat={12.34} labelSize={"medium"}/>
          <StatBox statName={statName} stat={stat} labelSize={"xlarge"}/>
          <StatBox statName={statName} stat={stat} labelSize={"large"}/>
          <StatBox statName={statName} stat={stat} labelSize={"small"}/>
      </View>
    ))
  .add('as grid', () => (
    <FlatGrid
        itemDimension={175}
        data={stats}
        renderItem={({ item }: { item: StatOptions }) => (<StatBox statName={item.statName} stat={item.stat}/>)}
    />
  ));
