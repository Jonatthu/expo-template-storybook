import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import { Text, View } from "react-native";

import { MyButton } from "./Button";
import React from "react";
// Notice the import path `@shopify/react-native-skia/lib/module/web`
// This is important only to pull the code responsible for loading Skia.
// @ts-expect-error
import { WithSkiaWeb } from "@shopify/react-native-skia/lib/module/web";
import { version } from 'canvaskit-wasm/package.json';

const MyButtonMeta: ComponentMeta<typeof MyButton> = {
  title: "MyButton",
  component: MyButton,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    text: "Hello world",
  },
};

export default MyButtonMeta;

type MyButtonStory = ComponentStory<typeof MyButton>;

export const Basic: MyButtonStory = (args) => {
  return <MyButton {...args} />
};

export const BasicSimple: MyButtonStory = (args) => {
  return <View>
    <WithSkiaWeb
    opts={{ locateFile: (file: string) => `https://cdn.jsdelivr.net/npm/canvaskit-wasm@${version}/bin/full/${file}` }}
      fallback={<Text>Loading Skia...</Text>}
      getComponent={() => import('./Button')}
    />
  </View>
}