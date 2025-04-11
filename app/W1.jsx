import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

export function W1(props) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , backgroundColor: 'lightblue'}}>
            <View style={{ flex: 1 }}>
                <Button
                    title="Increment"
                    onPress={() => console.log('Button pressed')}
                />
            </View>
        </View>
    );
}