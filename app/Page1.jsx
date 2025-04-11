import { View } from 'react-native';
import W1 from './W1';
import W2 from './W2';
import W3 from './W3';
import W4 from './W4';


export function Page1() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <W1/>
        <W2/>
        <W3/>
        <W4/>
    </View>
  );
}