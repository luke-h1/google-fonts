# @expo-google-fonts/noto-serif-tibetan

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-serif-tibetan)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-serif-tibetan)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-serif-tibetan)

This package lets you use the [**Noto Serif Tibetan**](https://fonts.google.com/specimen/Noto+Serif+Tibetan) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Serif Tibetan

![Noto Serif Tibetan](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSerifTibetan_100Thin`
- `NotoSerifTibetan_200ExtraLight`
- `NotoSerifTibetan_300Light`
- `NotoSerifTibetan_400Regular`
- `NotoSerifTibetan_500Medium`
- `NotoSerifTibetan_600SemiBold`
- `NotoSerifTibetan_700Bold`
- `NotoSerifTibetan_800ExtraBold`
- `NotoSerifTibetan_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/noto-serif-tibetan expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/noto-serif-tibetan/useFonts';
import { NotoSerifTibetan_100Thin } from '@expo-google-fonts/noto-serif-tibetan/100Thin';
import { NotoSerifTibetan_200ExtraLight } from '@expo-google-fonts/noto-serif-tibetan/200ExtraLight';
import { NotoSerifTibetan_300Light } from '@expo-google-fonts/noto-serif-tibetan/300Light';
import { NotoSerifTibetan_400Regular } from '@expo-google-fonts/noto-serif-tibetan/400Regular';
import { NotoSerifTibetan_500Medium } from '@expo-google-fonts/noto-serif-tibetan/500Medium';
import { NotoSerifTibetan_600SemiBold } from '@expo-google-fonts/noto-serif-tibetan/600SemiBold';
import { NotoSerifTibetan_700Bold } from '@expo-google-fonts/noto-serif-tibetan/700Bold';
import { NotoSerifTibetan_800ExtraBold } from '@expo-google-fonts/noto-serif-tibetan/800ExtraBold';
import { NotoSerifTibetan_900Black } from '@expo-google-fonts/noto-serif-tibetan/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    NotoSerifTibetan_100Thin, 
    NotoSerifTibetan_200ExtraLight, 
    NotoSerifTibetan_300Light, 
    NotoSerifTibetan_400Regular, 
    NotoSerifTibetan_500Medium, 
    NotoSerifTibetan_600SemiBold, 
    NotoSerifTibetan_700Bold, 
    NotoSerifTibetan_800ExtraBold, 
    NotoSerifTibetan_900Black
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
          fontFamily: "NotoSerifTibetan_100Thin"
        }}>
          Noto Serif Tibetan Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifTibetan_200ExtraLight"
        }}>
          Noto Serif Tibetan Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifTibetan_300Light"
        }}>
          Noto Serif Tibetan Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifTibetan_400Regular"
        }}>
          Noto Serif Tibetan Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifTibetan_500Medium"
        }}>
          Noto Serif Tibetan Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifTibetan_600SemiBold"
        }}>
          Noto Serif Tibetan Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifTibetan_700Bold"
        }}>
          Noto Serif Tibetan Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifTibetan_800ExtraBold"
        }}>
          Noto Serif Tibetan Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifTibetan_900Black"
        }}>
          Noto Serif Tibetan Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSerifTibetan_100Thin](./100Thin/NotoSerifTibetan_100Thin.ttf.png)|![NotoSerifTibetan_200ExtraLight](./200ExtraLight/NotoSerifTibetan_200ExtraLight.ttf.png)|![NotoSerifTibetan_300Light](./300Light/NotoSerifTibetan_300Light.ttf.png)||
|![NotoSerifTibetan_400Regular](./400Regular/NotoSerifTibetan_400Regular.ttf.png)|![NotoSerifTibetan_500Medium](./500Medium/NotoSerifTibetan_500Medium.ttf.png)|![NotoSerifTibetan_600SemiBold](./600SemiBold/NotoSerifTibetan_600SemiBold.ttf.png)||
|![NotoSerifTibetan_700Bold](./700Bold/NotoSerifTibetan_700Bold.ttf.png)|![NotoSerifTibetan_800ExtraBold](./800ExtraBold/NotoSerifTibetan_800ExtraBold.ttf.png)|![NotoSerifTibetan_900Black](./900Black/NotoSerifTibetan_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/noto-serif-tibetan` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Serif Tibetan page on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Tibetan) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Serif Tibetan on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Tibetan)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-serif-tibetan)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-serif-tibetan)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
