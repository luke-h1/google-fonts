# @expo-google-fonts/source-serif-pro

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/source-serif-pro)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/source-serif-pro)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/source-serif-pro)

This package lets you use the [**Source Serif Pro**](https://fonts.google.com/specimen/Source+Serif+Pro) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Source Serif Pro

![Source Serif Pro](./font-family.png)

This font family contains [12 styles](#-gallery).

- `SourceSerifPro_200ExtraLight`
- `SourceSerifPro_200ExtraLight_Italic`
- `SourceSerifPro_300Light`
- `SourceSerifPro_300Light_Italic`
- `SourceSerifPro_400Regular`
- `SourceSerifPro_400Regular_Italic`
- `SourceSerifPro_600SemiBold`
- `SourceSerifPro_600SemiBold_Italic`
- `SourceSerifPro_700Bold`
- `SourceSerifPro_700Bold_Italic`
- `SourceSerifPro_900Black`
- `SourceSerifPro_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/source-serif-pro expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  SourceSerifPro_200ExtraLight,
  SourceSerifPro_200ExtraLight_Italic,
  SourceSerifPro_300Light,
  SourceSerifPro_300Light_Italic,
  SourceSerifPro_400Regular,
  SourceSerifPro_400Regular_Italic,
  SourceSerifPro_600SemiBold,
  SourceSerifPro_600SemiBold_Italic,
  SourceSerifPro_700Bold,
  SourceSerifPro_700Bold_Italic,
  SourceSerifPro_900Black,
  SourceSerifPro_900Black_Italic,
} from '@expo-google-fonts/source-serif-pro';

export default () => {
  let [fontsLoaded] = useFonts({
    SourceSerifPro_200ExtraLight,
    SourceSerifPro_200ExtraLight_Italic,
    SourceSerifPro_300Light,
    SourceSerifPro_300Light_Italic,
    SourceSerifPro_400Regular,
    SourceSerifPro_400Regular_Italic,
    SourceSerifPro_600SemiBold,
    SourceSerifPro_600SemiBold_Italic,
    SourceSerifPro_700Bold,
    SourceSerifPro_700Bold_Italic,
    SourceSerifPro_900Black,
    SourceSerifPro_900Black_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSerifPro_200ExtraLight',
          }}>
          Source Serif Pro Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSerifPro_200ExtraLight_Italic',
          }}>
          Source Serif Pro Extra Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSerifPro_300Light',
          }}>
          Source Serif Pro Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSerifPro_300Light_Italic',
          }}>
          Source Serif Pro Light Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSerifPro_400Regular',
          }}>
          Source Serif Pro Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSerifPro_400Regular_Italic',
          }}>
          Source Serif Pro Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSerifPro_600SemiBold',
          }}>
          Source Serif Pro Semi Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSerifPro_600SemiBold_Italic',
          }}>
          Source Serif Pro Semi Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSerifPro_700Bold',
          }}>
          Source Serif Pro Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSerifPro_700Bold_Italic',
          }}>
          Source Serif Pro Bold Italic
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSerifPro_900Black',
          }}>
          Source Serif Pro Black
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'SourceSerifPro_900Black_Italic',
          }}>
          Source Serif Pro Black Italic
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![SourceSerifPro_200ExtraLight](./SourceSerifPro_200ExtraLight.ttf.png)|![SourceSerifPro_200ExtraLight_Italic](./SourceSerifPro_200ExtraLight_Italic.ttf.png)|![SourceSerifPro_300Light](./SourceSerifPro_300Light.ttf.png)||
|![SourceSerifPro_300Light_Italic](./SourceSerifPro_300Light_Italic.ttf.png)|![SourceSerifPro_400Regular](./SourceSerifPro_400Regular.ttf.png)|![SourceSerifPro_400Regular_Italic](./SourceSerifPro_400Regular_Italic.ttf.png)||
|![SourceSerifPro_600SemiBold](./SourceSerifPro_600SemiBold.ttf.png)|![SourceSerifPro_600SemiBold_Italic](./SourceSerifPro_600SemiBold_Italic.ttf.png)|![SourceSerifPro_700Bold](./SourceSerifPro_700Bold.ttf.png)||
|![SourceSerifPro_700Bold_Italic](./SourceSerifPro_700Bold_Italic.ttf.png)|![SourceSerifPro_900Black](./SourceSerifPro_900Black.ttf.png)|![SourceSerifPro_900Black_Italic](./SourceSerifPro_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/source-serif-pro` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Source Serif Pro page on Google Fonts](https://fonts.google.com/specimen/Source+Serif+Pro) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Source Serif Pro on Google Fonts](https://fonts.google.com/specimen/Source+Serif+Pro)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/source-serif-pro)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/source-serif-pro)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
