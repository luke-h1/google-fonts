# @expo-google-fonts/arima-madurai

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/arima-madurai)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/arima-madurai)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/arima-madurai)

This package lets you use the [**Arima Madurai**](https://fonts.google.com/specimen/Arima+Madurai) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Arima Madurai

![Arima Madurai](./font-family.png)

This font family contains [8 styles](#-gallery).

- `ArimaMadurai_100Thin`
- `ArimaMadurai_200ExtraLight`
- `ArimaMadurai_300Light`
- `ArimaMadurai_400Regular`
- `ArimaMadurai_500Medium`
- `ArimaMadurai_700Bold`
- `ArimaMadurai_800ExtraBold`
- `ArimaMadurai_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project
```sh
expo install @expo-google-fonts/arima-madurai expo-font expo-app-loading
```

Now add code like this to your project
```js
import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  ArimaMadurai_100Thin,
  ArimaMadurai_200ExtraLight,
  ArimaMadurai_300Light,
  ArimaMadurai_400Regular,
  ArimaMadurai_500Medium,
  ArimaMadurai_700Bold,
  ArimaMadurai_800ExtraBold,
  ArimaMadurai_900Black,
} from '@expo-google-fonts/arima-madurai';

export default () => {
  let [fontsLoaded] = useFonts({
    ArimaMadurai_100Thin,
    ArimaMadurai_200ExtraLight,
    ArimaMadurai_300Light,
    ArimaMadurai_400Regular,
    ArimaMadurai_500Medium,
    ArimaMadurai_700Bold,
    ArimaMadurai_800ExtraBold,
    ArimaMadurai_900Black,
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
            fontFamily: 'ArimaMadurai_100Thin',
          }}>
          Arima Madurai Thin
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'ArimaMadurai_200ExtraLight',
          }}>
          Arima Madurai Extra Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'ArimaMadurai_300Light',
          }}>
          Arima Madurai Light
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'ArimaMadurai_400Regular',
          }}>
          Arima Madurai Regular
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'ArimaMadurai_500Medium',
          }}>
          Arima Madurai Medium
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'ArimaMadurai_700Bold',
          }}>
          Arima Madurai Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'ArimaMadurai_800ExtraBold',
          }}>
          Arima Madurai Extra Bold
        </Text>

        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'ArimaMadurai_900Black',
          }}>
          Arima Madurai Black
        </Text>
      </View>
    );
  }
};

```

## 🔡 Gallery


||||
|-|-|-|
|![ArimaMadurai_100Thin](./ArimaMadurai_100Thin.ttf.png)|![ArimaMadurai_200ExtraLight](./ArimaMadurai_200ExtraLight.ttf.png)|![ArimaMadurai_300Light](./ArimaMadurai_300Light.ttf.png)||
|![ArimaMadurai_400Regular](./ArimaMadurai_400Regular.ttf.png)|![ArimaMadurai_500Medium](./ArimaMadurai_500Medium.ttf.png)|![ArimaMadurai_700Bold](./ArimaMadurai_700Bold.ttf.png)||
|![ArimaMadurai_800ExtraBold](./ArimaMadurai_800ExtraBold.ttf.png)|![ArimaMadurai_900Black](./ArimaMadurai_900Black.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import *any* font style from any Expo Google Fonts package from it. It will load the fonts
over the network at runtime instead of adding the asset as a file to your project, so it may take longer
for your app to get to interactivity at startup, but it is extremely convenient
for playing around with any style that you want.

## 📖 License

The `@expo-google-fonts/arima-madurai` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Arima Madurai page on Google Fonts](https://fonts.google.com/specimen/Arima+Madurai) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Arima Madurai on Google Fonts](https://fonts.google.com/specimen/Arima+Madurai)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/arima-madurai)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/arima-madurai)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
