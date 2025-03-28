# @expo-google-fonts/anek-devanagari

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/anek-devanagari)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/anek-devanagari)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/anek-devanagari)

This package lets you use the [**Anek Devanagari**](https://fonts.google.com/specimen/Anek+Devanagari) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Anek Devanagari

![Anek Devanagari](./font-family.png)

This font family contains [8 styles](#-gallery).

- `AnekDevanagari_100Thin`
- `AnekDevanagari_200ExtraLight`
- `AnekDevanagari_300Light`
- `AnekDevanagari_400Regular`
- `AnekDevanagari_500Medium`
- `AnekDevanagari_600SemiBold`
- `AnekDevanagari_700Bold`
- `AnekDevanagari_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/anek-devanagari expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/anek-devanagari/useFonts';
import { AnekDevanagari_100Thin } from '@expo-google-fonts/anek-devanagari/100Thin';
import { AnekDevanagari_200ExtraLight } from '@expo-google-fonts/anek-devanagari/200ExtraLight';
import { AnekDevanagari_300Light } from '@expo-google-fonts/anek-devanagari/300Light';
import { AnekDevanagari_400Regular } from '@expo-google-fonts/anek-devanagari/400Regular';
import { AnekDevanagari_500Medium } from '@expo-google-fonts/anek-devanagari/500Medium';
import { AnekDevanagari_600SemiBold } from '@expo-google-fonts/anek-devanagari/600SemiBold';
import { AnekDevanagari_700Bold } from '@expo-google-fonts/anek-devanagari/700Bold';
import { AnekDevanagari_800ExtraBold } from '@expo-google-fonts/anek-devanagari/800ExtraBold';

export default () => {

  let [fontsLoaded] = useFonts({
    AnekDevanagari_100Thin, 
    AnekDevanagari_200ExtraLight, 
    AnekDevanagari_300Light, 
    AnekDevanagari_400Regular, 
    AnekDevanagari_500Medium, 
    AnekDevanagari_600SemiBold, 
    AnekDevanagari_700Bold, 
    AnekDevanagari_800ExtraBold
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
          fontFamily: "AnekDevanagari_100Thin"
        }}>
          Anek Devanagari Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekDevanagari_200ExtraLight"
        }}>
          Anek Devanagari Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekDevanagari_300Light"
        }}>
          Anek Devanagari Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekDevanagari_400Regular"
        }}>
          Anek Devanagari Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekDevanagari_500Medium"
        }}>
          Anek Devanagari Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekDevanagari_600SemiBold"
        }}>
          Anek Devanagari Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekDevanagari_700Bold"
        }}>
          Anek Devanagari Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekDevanagari_800ExtraBold"
        }}>
          Anek Devanagari Extra Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![AnekDevanagari_100Thin](./100Thin/AnekDevanagari_100Thin.ttf.png)|![AnekDevanagari_200ExtraLight](./200ExtraLight/AnekDevanagari_200ExtraLight.ttf.png)|![AnekDevanagari_300Light](./300Light/AnekDevanagari_300Light.ttf.png)||
|![AnekDevanagari_400Regular](./400Regular/AnekDevanagari_400Regular.ttf.png)|![AnekDevanagari_500Medium](./500Medium/AnekDevanagari_500Medium.ttf.png)|![AnekDevanagari_600SemiBold](./600SemiBold/AnekDevanagari_600SemiBold.ttf.png)||
|![AnekDevanagari_700Bold](./700Bold/AnekDevanagari_700Bold.ttf.png)|![AnekDevanagari_800ExtraBold](./800ExtraBold/AnekDevanagari_800ExtraBold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/anek-devanagari` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Anek Devanagari page on Google Fonts](https://fonts.google.com/specimen/Anek+Devanagari) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Anek Devanagari on Google Fonts](https://fonts.google.com/specimen/Anek+Devanagari)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/anek-devanagari)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/anek-devanagari)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
