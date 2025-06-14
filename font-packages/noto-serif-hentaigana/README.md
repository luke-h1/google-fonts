# @expo-google-fonts/noto-serif-hentaigana

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-serif-hentaigana)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-serif-hentaigana)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-serif-hentaigana)

This package lets you use the [**Noto Serif Hentaigana**](https://fonts.google.com/specimen/Noto+Serif+Hentaigana) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Serif Hentaigana

![Noto Serif Hentaigana](./font-family.png)

This font family contains [8 styles](#-gallery).

- `NotoSerifHentaigana_200ExtraLight`
- `NotoSerifHentaigana_300Light`
- `NotoSerifHentaigana_400Regular`
- `NotoSerifHentaigana_500Medium`
- `NotoSerifHentaigana_600SemiBold`
- `NotoSerifHentaigana_700Bold`
- `NotoSerifHentaigana_800ExtraBold`
- `NotoSerifHentaigana_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/noto-serif-hentaigana expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/noto-serif-hentaigana/useFonts';
import { NotoSerifHentaigana_200ExtraLight } from '@expo-google-fonts/noto-serif-hentaigana/200ExtraLight';
import { NotoSerifHentaigana_300Light } from '@expo-google-fonts/noto-serif-hentaigana/300Light';
import { NotoSerifHentaigana_400Regular } from '@expo-google-fonts/noto-serif-hentaigana/400Regular';
import { NotoSerifHentaigana_500Medium } from '@expo-google-fonts/noto-serif-hentaigana/500Medium';
import { NotoSerifHentaigana_600SemiBold } from '@expo-google-fonts/noto-serif-hentaigana/600SemiBold';
import { NotoSerifHentaigana_700Bold } from '@expo-google-fonts/noto-serif-hentaigana/700Bold';
import { NotoSerifHentaigana_800ExtraBold } from '@expo-google-fonts/noto-serif-hentaigana/800ExtraBold';
import { NotoSerifHentaigana_900Black } from '@expo-google-fonts/noto-serif-hentaigana/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    NotoSerifHentaigana_200ExtraLight, 
    NotoSerifHentaigana_300Light, 
    NotoSerifHentaigana_400Regular, 
    NotoSerifHentaigana_500Medium, 
    NotoSerifHentaigana_600SemiBold, 
    NotoSerifHentaigana_700Bold, 
    NotoSerifHentaigana_800ExtraBold, 
    NotoSerifHentaigana_900Black
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
          fontFamily: "NotoSerifHentaigana_200ExtraLight"
        }}>
          Noto Serif Hentaigana Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifHentaigana_300Light"
        }}>
          Noto Serif Hentaigana Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifHentaigana_400Regular"
        }}>
          Noto Serif Hentaigana Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifHentaigana_500Medium"
        }}>
          Noto Serif Hentaigana Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifHentaigana_600SemiBold"
        }}>
          Noto Serif Hentaigana Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifHentaigana_700Bold"
        }}>
          Noto Serif Hentaigana Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifHentaigana_800ExtraBold"
        }}>
          Noto Serif Hentaigana Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifHentaigana_900Black"
        }}>
          Noto Serif Hentaigana Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSerifHentaigana_200ExtraLight](./200ExtraLight/NotoSerifHentaigana_200ExtraLight.ttf.png)|![NotoSerifHentaigana_300Light](./300Light/NotoSerifHentaigana_300Light.ttf.png)|![NotoSerifHentaigana_400Regular](./400Regular/NotoSerifHentaigana_400Regular.ttf.png)||
|![NotoSerifHentaigana_500Medium](./500Medium/NotoSerifHentaigana_500Medium.ttf.png)|![NotoSerifHentaigana_600SemiBold](./600SemiBold/NotoSerifHentaigana_600SemiBold.ttf.png)|![NotoSerifHentaigana_700Bold](./700Bold/NotoSerifHentaigana_700Bold.ttf.png)||
|![NotoSerifHentaigana_800ExtraBold](./800ExtraBold/NotoSerifHentaigana_800ExtraBold.ttf.png)|![NotoSerifHentaigana_900Black](./900Black/NotoSerifHentaigana_900Black.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/noto-serif-hentaigana` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Serif Hentaigana page on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Hentaigana) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Serif Hentaigana on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Hentaigana)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-serif-hentaigana)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-serif-hentaigana)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
