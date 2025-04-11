import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

export function W2(props) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , backgroundColor: 'lightgreen'}}>
            <Button
                title="Reset"
                onPress={() => console.log('Button pressed')}
            />
        </View>
    );
}
