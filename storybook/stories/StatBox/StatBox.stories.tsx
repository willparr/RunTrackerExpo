import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import StatBox from '../../../components/StatBox';
import { View } from '../../../components/Themed';
import CenterView from '../CenterView'; 
import {FlatGrid} from 'react-native-super-grid'

const stat = 12.45
const statName = "Speed"
interface Stat {
    stat: string | number,
    statName: string
}
const stats = [{stat, statName}, {stat, statName},{stat, statName},{stat, statName}]
storiesOf('StatBox', module)
  .add('with text', () => (
      <StatBox statName={statName} stat={stat}/>
  ))
  .add('multiple stats', () => (
      <View style={{flex: 1}}>
          <StatBox statName={statName} stat={stat}/>
          <StatBox statName={statName} stat={stat}/>
          <StatBox statName={statName} stat={stat}/>
          <StatBox statName={statName} stat={stat}/>
      </View>
    ))
  .add('as grid', () => (
    <CenterView>
        <View style={{flex: 1,
    flexGrow: 1,
    flexDirection:'row',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1}}>
            <StatBox statName={statName} stat={stat}/>
            <StatBox statName={statName} stat={stat}/>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
            <StatBox statName={statName} stat={stat}/>
            <StatBox statName={statName} stat={stat}/>
        </View>
    </CenterView>
  ))
  .add('as grid', () => (
    <FlatGrid
        itemDimension={130}
        data={stats}
        renderItem={({ item }: { item: Stat }) => (<StatBox statName={item.statName} stat={item.stat}/>)}
    />
  ));
