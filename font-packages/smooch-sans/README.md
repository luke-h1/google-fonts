# @expo-google-fonts/smooch-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/smooch-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/smooch-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/smooch-sans)

This package lets you use the [**Smooch Sans**](https://fonts.google.com/specimen/Smooch+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Smooch Sans

![Smooch Sans](./font-family.png)

This font family contains [9 styles](#-gallery).

- `SmoochSans_100Thin`
- `SmoochSans_200ExtraLight`
- `SmoochSans_300Light`
- `SmoochSans_400Regular`
- `SmoochSans_500Medium`
- `SmoochSans_600SemiBold`
- `SmoochSans_700Bold`
- `SmoochSans_800ExtraBold`
- `SmoochSans_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/smooch-sans expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/smooch-sans/useFonts';
import { SmoochSans_100Thin } from '@expo-google-fonts/smooch-sans/100Thin';
import { SmoochSans_200ExtraLight } from '@expo-google-fonts/smooch-sans/200ExtraLight';
import { SmoochSans_300Light } from '@expo-google-fonts/smooch-sans/300Light';
import { SmoochSans_400Regular } from '@expo-google-fonts/smooch-sans/400Regular';
import { SmoochSans_500Medium } from '@expo-google-fonts/smooch-sans/500Medium';
import { SmoochSans_600SemiBold } from '@expo-google-fonts/smooch-sans/600SemiBold';
import { SmoochSans_700Bold } from '@expo-google-fonts/smooch-sans/700Bold';
import { SmoochSans_800ExtraBold } from '@expo-google-fonts/smooch-sans/800ExtraBold';
import { SmoochSans_900Black } from '@expo-google-fonts/smooch-sans/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    SmoochSans_100Thin, 
    SmoochSans_200ExtraLight, 
    SmoochSans_300Light, 
    SmoochSans_400Regular, 
    SmoochSans_500Medium, 
    SmoochSans_600SemiBold, 
    SmoochSans_700Bold, 
    SmoochSans_800ExtraBold, 
    SmoochSans_900Black
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
          fontFamily: "SmoochSans_100Thin"
        }}>
          Smooch Sans Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SmoochSans_200ExtraLight"
        }}>
          Smooch Sans Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SmoochSans_300Light"
        }}>
          Smooch Sans Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SmoochSans_400Regular"
        }}>
          Smooch Sans Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SmoochSans_500Medium"
        }}>
          Smooch Sans Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SmoochSans_600SemiBold"
        }}>
          Smooch Sans Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SmoochSans_700Bold"
        }}>
          Smooch Sans Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SmoochSans_800ExtraBold"
        }}>
          Smooch Sans Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SmoochSans_900Black"
        }}>
          Smooch Sans Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![SmoochSans_100Thin](./100Thin/SmoochSans_100Thin.ttf.png)|![SmoochSans_200ExtraLight](./200ExtraLight/SmoochSans_200ExtraLight.ttf.png)|![SmoochSans_300Light](./300Light/SmoochSans_300Light.ttf.png)||
|![SmoochSans_400Regular](./400Regular/SmoochSans_400Regular.ttf.png)|![SmoochSans_500Medium](./500Medium/SmoochSans_500Medium.ttf.png)|![SmoochSans_600SemiBold](./600SemiBold/SmoochSans_600SemiBold.ttf.png)||
|![SmoochSans_700Bold](./700Bold/SmoochSans_700Bold.ttf.png)|![SmoochSans_800ExtraBold](./800ExtraBold/SmoochSans_800ExtraBold.ttf.png)|![SmoochSans_900Black](./900Black/SmoochSans_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/smooch-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Smooch Sans page on Google Fonts](https://fonts.google.com/specimen/Smooch+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Smooch Sans on Google Fonts](https://fonts.google.com/specimen/Smooch+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/smooch-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/smooch-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
