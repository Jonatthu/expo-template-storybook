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
        <View className='pt-28 flex-1'>
            <Text className='text-base'>Hello</Text>
            <Text className='text-lg'>Hello</Text>
            <Text className='text-xl'>Hello</Text>
            {/* This class 9xl is broken for example */}
            <Text className='text-8xl'>Hello</Text>
            <Text className='text-9xl'>Hello</Text>
            <View className="flex-1 bg-green-100 p-2">
                <View className="flex-1 mb-4 gap-2">
                    {DecimalsButtons.map((row, index) => (
                        <View className="flex-1 flex-row gap-2" key={index}>
                            {row.map((button) => (
                                <Button
                                    key={button}
                                    className="h-16 flex-1 items-center justify-center"
                                >
                                    <Text>{button}</Text>
                                </Button>
                            ))}
                        </View>
                    ))}
                </View>
            </View>

            {/* Normal implementation */}
            <View style={{ flexDirection: 'column', marginBottom: 16 }}>
                {DecimalsButtons.map((row, index) => (
                    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'red' }} key={index}>
                        {row.map((button) => (
                            <View key={button} style={{ flex: 1 }}>
                                <Button style={{ height: 64, backgroundColor: 'green' }}>
                                    <Text className='text-center'>{button}</Text>
                                </Button>
                            </View>
                        ))}
                    </View>
                ))}
            </View>
        </View>
    );


}
