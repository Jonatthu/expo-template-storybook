import { TouchableOpacity as RNButton, Text as RNText, View as RNView } from 'react-native';

import React from 'react';
import { styled } from 'nativewind';

const View = styled(RNView);
const Button = styled(RNButton);
const Text = styled(RNText);


const DecimalsButtons = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['.', '0', 'Del'],
];

export default function App() {
    return (
        <View className='pt-28 bg-purple-300 flex-1'>
            <Text className='text-base'>Hello</Text>
            <Text className='text-lg'>Hello</Text>
            <Text className='text-xl'>Hello</Text>
            <Text className='text-9xl'>Hello</Text>
            <View className="bg-green-100 mb-4 gap-2">
                {DecimalsButtons.map((row, index) => (
                    <View className="flex-1 flex-row gap-2" key={index}>
                        {row.map((button) => (
                            <Button key={button} className="h-16 flex-1">
                                <Text>{button}</Text>
                            </Button>
                        ))}
                    </View>
                ))}
            </View>
        </View>
    );


}
