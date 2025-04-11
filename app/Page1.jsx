import { View } from 'react-native';
import {W1} from './W1';
import {W2} from './W2';
import {W3} from './W3';
import {W4} from './W4';
import { Text } from 'react-native-paper';

export function Page1() {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
            <W1/>
        </View>
        <View style={{ flex: 1 }}>
            <W2/>
        </View>
        <View style={{ flex: 1 }}>
            <W3/>
        </View>
        <View style={{ flex: 1 }}>
            <W4/>
        </View>
    </View>
  );
}