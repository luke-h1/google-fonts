# @expo-google-fonts/noto-serif-myanmar

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-serif-myanmar)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-serif-myanmar)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-serif-myanmar)

This package lets you use the [**Noto Serif Myanmar**](https://fonts.google.com/specimen/Noto+Serif+Myanmar) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Serif Myanmar

![Noto Serif Myanmar](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSerifMyanmar_100Thin`
- `NotoSerifMyanmar_200ExtraLight`
- `NotoSerifMyanmar_300Light`
- `NotoSerifMyanmar_400Regular`
- `NotoSerifMyanmar_500Medium`
- `NotoSerifMyanmar_600SemiBold`
- `NotoSerifMyanmar_700Bold`
- `NotoSerifMyanmar_800ExtraBold`
- `NotoSerifMyanmar_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/noto-serif-myanmar expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/noto-serif-myanmar/useFonts';
import { NotoSerifMyanmar_100Thin } from '@expo-google-fonts/noto-serif-myanmar/100Thin';
import { NotoSerifMyanmar_200ExtraLight } from '@expo-google-fonts/noto-serif-myanmar/200ExtraLight';
import { NotoSerifMyanmar_300Light } from '@expo-google-fonts/noto-serif-myanmar/300Light';
import { NotoSerifMyanmar_400Regular } from '@expo-google-fonts/noto-serif-myanmar/400Regular';
import { NotoSerifMyanmar_500Medium } from '@expo-google-fonts/noto-serif-myanmar/500Medium';
import { NotoSerifMyanmar_600SemiBold } from '@expo-google-fonts/noto-serif-myanmar/600SemiBold';
import { NotoSerifMyanmar_700Bold } from '@expo-google-fonts/noto-serif-myanmar/700Bold';
import { NotoSerifMyanmar_800ExtraBold } from '@expo-google-fonts/noto-serif-myanmar/800ExtraBold';
import { NotoSerifMyanmar_900Black } from '@expo-google-fonts/noto-serif-myanmar/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    NotoSerifMyanmar_100Thin, 
    NotoSerifMyanmar_200ExtraLight, 
    NotoSerifMyanmar_300Light, 
    NotoSerifMyanmar_400Regular, 
    NotoSerifMyanmar_500Medium, 
    NotoSerifMyanmar_600SemiBold, 
    NotoSerifMyanmar_700Bold, 
    NotoSerifMyanmar_800ExtraBold, 
    NotoSerifMyanmar_900Black
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
          fontFamily: "NotoSerifMyanmar_100Thin"
        }}>
          Noto Serif Myanmar Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifMyanmar_200ExtraLight"
        }}>
          Noto Serif Myanmar Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifMyanmar_300Light"
        }}>
          Noto Serif Myanmar Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifMyanmar_400Regular"
        }}>
          Noto Serif Myanmar Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifMyanmar_500Medium"
        }}>
          Noto Serif Myanmar Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifMyanmar_600SemiBold"
        }}>
          Noto Serif Myanmar Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifMyanmar_700Bold"
        }}>
          Noto Serif Myanmar Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifMyanmar_800ExtraBold"
        }}>
          Noto Serif Myanmar Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifMyanmar_900Black"
        }}>
          Noto Serif Myanmar Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSerifMyanmar_100Thin](./100Thin/NotoSerifMyanmar_100Thin.ttf.png)|![NotoSerifMyanmar_200ExtraLight](./200ExtraLight/NotoSerifMyanmar_200ExtraLight.ttf.png)|![NotoSerifMyanmar_300Light](./300Light/NotoSerifMyanmar_300Light.ttf.png)||
|![NotoSerifMyanmar_400Regular](./400Regular/NotoSerifMyanmar_400Regular.ttf.png)|![NotoSerifMyanmar_500Medium](./500Medium/NotoSerifMyanmar_500Medium.ttf.png)|![NotoSerifMyanmar_600SemiBold](./600SemiBold/NotoSerifMyanmar_600SemiBold.ttf.png)||
|![NotoSerifMyanmar_700Bold](./700Bold/NotoSerifMyanmar_700Bold.ttf.png)|![NotoSerifMyanmar_800ExtraBold](./800ExtraBold/NotoSerifMyanmar_800ExtraBold.ttf.png)|![NotoSerifMyanmar_900Black](./900Black/NotoSerifMyanmar_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/noto-serif-myanmar` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Serif Myanmar page on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Myanmar) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Serif Myanmar on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Myanmar)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-serif-myanmar)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-serif-myanmar)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
