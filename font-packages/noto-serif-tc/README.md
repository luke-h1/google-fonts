# @expo-google-fonts/noto-serif-tc

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-serif-tc)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-serif-tc)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-serif-tc)

This package lets you use the [**Noto Serif TC**](https://fonts.google.com/specimen/Noto+Serif+TC) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Serif TC

![Noto Serif TC](./font-family.png)

This font family contains [8 styles](#-gallery).

- `NotoSerifTC_200ExtraLight`
- `NotoSerifTC_300Light`
- `NotoSerifTC_400Regular`
- `NotoSerifTC_500Medium`
- `NotoSerifTC_600SemiBold`
- `NotoSerifTC_700Bold`
- `NotoSerifTC_800ExtraBold`
- `NotoSerifTC_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/noto-serif-tc expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/noto-serif-tc/useFonts';
import { NotoSerifTC_200ExtraLight } from '@expo-google-fonts/noto-serif-tc/200ExtraLight';
import { NotoSerifTC_300Light } from '@expo-google-fonts/noto-serif-tc/300Light';
import { NotoSerifTC_400Regular } from '@expo-google-fonts/noto-serif-tc/400Regular';
import { NotoSerifTC_500Medium } from '@expo-google-fonts/noto-serif-tc/500Medium';
import { NotoSerifTC_600SemiBold } from '@expo-google-fonts/noto-serif-tc/600SemiBold';
import { NotoSerifTC_700Bold } from '@expo-google-fonts/noto-serif-tc/700Bold';
import { NotoSerifTC_800ExtraBold } from '@expo-google-fonts/noto-serif-tc/800ExtraBold';
import { NotoSerifTC_900Black } from '@expo-google-fonts/noto-serif-tc/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    NotoSerifTC_200ExtraLight, 
    NotoSerifTC_300Light, 
    NotoSerifTC_400Regular, 
    NotoSerifTC_500Medium, 
    NotoSerifTC_600SemiBold, 
    NotoSerifTC_700Bold, 
    NotoSerifTC_800ExtraBold, 
    NotoSerifTC_900Black
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
          fontFamily: "NotoSerifTC_200ExtraLight"
        }}>
          Noto Serif TC Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifTC_300Light"
        }}>
          Noto Serif TC Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifTC_400Regular"
        }}>
          Noto Serif TC Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifTC_500Medium"
        }}>
          Noto Serif TC Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifTC_600SemiBold"
        }}>
          Noto Serif TC Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifTC_700Bold"
        }}>
          Noto Serif TC Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifTC_800ExtraBold"
        }}>
          Noto Serif TC Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifTC_900Black"
        }}>
          Noto Serif TC Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSerifTC_200ExtraLight](./200ExtraLight/NotoSerifTC_200ExtraLight.ttf.png)|![NotoSerifTC_300Light](./300Light/NotoSerifTC_300Light.ttf.png)|![NotoSerifTC_400Regular](./400Regular/NotoSerifTC_400Regular.ttf.png)||
|![NotoSerifTC_500Medium](./500Medium/NotoSerifTC_500Medium.ttf.png)|![NotoSerifTC_600SemiBold](./600SemiBold/NotoSerifTC_600SemiBold.ttf.png)|![NotoSerifTC_700Bold](./700Bold/NotoSerifTC_700Bold.ttf.png)||
|![NotoSerifTC_800ExtraBold](./800ExtraBold/NotoSerifTC_800ExtraBold.ttf.png)|![NotoSerifTC_900Black](./900Black/NotoSerifTC_900Black.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/noto-serif-tc` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Serif TC page on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+TC) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Serif TC on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+TC)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-serif-tc)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-serif-tc)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
