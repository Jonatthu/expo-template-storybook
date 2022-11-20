import { TouchableOpacity as RNButton, Text as RNText, View as RNView } from 'react-native';

import React from 'react';
import { styled } from 'nativewind';

const View = styled(RNView);
const Button = styled(RNButton);
const Text = styled(RNText);


const DecimalsButtons = [
    ['1', '4', '7', '0'],
    ['2', '5', '8', '.'],
    ['3', '6', '9', 'Del'],
];


export default function App() {
    return (
        <View className='pt-28 flex-1'>
            <View className="mb-4 flex-row">
                {DecimalsButtons.map((row, index) => (
                    <View className="flex-1 gap-2" key={index}>
                        {row.map((button) => (
                            <Button
                                key={button}
                                className="h-16 items-center justify-center bg-green-100"
                            >
                                <Text>{button}</Text>
                            </Button>
                        ))}
                    </View>
                ))}
            </View>
        </View>
    );


}
