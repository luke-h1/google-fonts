# @expo-google-fonts/baloo-thambi-2

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/baloo-thambi-2)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/baloo-thambi-2)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/baloo-thambi-2)

This package lets you use the [**Baloo Thambi 2**](https://fonts.google.com/specimen/Baloo+Thambi+2) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Baloo Thambi 2

![Baloo Thambi 2](./font-family.png)

This font family contains [5 styles](#-gallery).

- `BalooThambi2_400Regular`
- `BalooThambi2_500Medium`
- `BalooThambi2_600SemiBold`
- `BalooThambi2_700Bold`
- `BalooThambi2_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/baloo-thambi-2 expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/baloo-thambi-2/useFonts';
import { BalooThambi2_400Regular } from '@expo-google-fonts/baloo-thambi-2/400Regular';
import { BalooThambi2_500Medium } from '@expo-google-fonts/baloo-thambi-2/500Medium';
import { BalooThambi2_600SemiBold } from '@expo-google-fonts/baloo-thambi-2/600SemiBold';
import { BalooThambi2_700Bold } from '@expo-google-fonts/baloo-thambi-2/700Bold';
import { BalooThambi2_800ExtraBold } from '@expo-google-fonts/baloo-thambi-2/800ExtraBold';

export default () => {

  let [fontsLoaded] = useFonts({
    BalooThambi2_400Regular, 
    BalooThambi2_500Medium, 
    BalooThambi2_600SemiBold, 
    BalooThambi2_700Bold, 
    BalooThambi2_800ExtraBold
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BalooThambi2_400Regular"
        }}>
          Baloo Thambi 2 Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BalooThambi2_500Medium"
        }}>
          Baloo Thambi 2 Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BalooThambi2_600SemiBold"
        }}>
          Baloo Thambi 2 Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BalooThambi2_700Bold"
        }}>
          Baloo Thambi 2 Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BalooThambi2_800ExtraBold"
        }}>
          Baloo Thambi 2 Extra Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![BalooThambi2_400Regular](./400Regular/BalooThambi2_400Regular.ttf.png)|![BalooThambi2_500Medium](./500Medium/BalooThambi2_500Medium.ttf.png)|![BalooThambi2_600SemiBold](./600SemiBold/BalooThambi2_600SemiBold.ttf.png)||
|![BalooThambi2_700Bold](./700Bold/BalooThambi2_700Bold.ttf.png)|![BalooThambi2_800ExtraBold](./800ExtraBold/BalooThambi2_800ExtraBold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/baloo-thambi-2` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Baloo Thambi 2 page on Google Fonts](https://fonts.google.com/specimen/Baloo+Thambi+2) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Baloo Thambi 2 on Google Fonts](https://fonts.google.com/specimen/Baloo+Thambi+2)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/baloo-thambi-2)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/baloo-thambi-2)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
