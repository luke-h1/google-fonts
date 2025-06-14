# @expo-google-fonts/anek-tamil

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/anek-tamil)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/anek-tamil)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/anek-tamil)

This package lets you use the [**Anek Tamil**](https://fonts.google.com/specimen/Anek+Tamil) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Anek Tamil

![Anek Tamil](./font-family.png)

This font family contains [8 styles](#-gallery).

- `AnekTamil_100Thin`
- `AnekTamil_200ExtraLight`
- `AnekTamil_300Light`
- `AnekTamil_400Regular`
- `AnekTamil_500Medium`
- `AnekTamil_600SemiBold`
- `AnekTamil_700Bold`
- `AnekTamil_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/anek-tamil expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/anek-tamil/useFonts';
import { AnekTamil_100Thin } from '@expo-google-fonts/anek-tamil/100Thin';
import { AnekTamil_200ExtraLight } from '@expo-google-fonts/anek-tamil/200ExtraLight';
import { AnekTamil_300Light } from '@expo-google-fonts/anek-tamil/300Light';
import { AnekTamil_400Regular } from '@expo-google-fonts/anek-tamil/400Regular';
import { AnekTamil_500Medium } from '@expo-google-fonts/anek-tamil/500Medium';
import { AnekTamil_600SemiBold } from '@expo-google-fonts/anek-tamil/600SemiBold';
import { AnekTamil_700Bold } from '@expo-google-fonts/anek-tamil/700Bold';
import { AnekTamil_800ExtraBold } from '@expo-google-fonts/anek-tamil/800ExtraBold';

export default () => {

  let [fontsLoaded] = useFonts({
    AnekTamil_100Thin, 
    AnekTamil_200ExtraLight, 
    AnekTamil_300Light, 
    AnekTamil_400Regular, 
    AnekTamil_500Medium, 
    AnekTamil_600SemiBold, 
    AnekTamil_700Bold, 
    AnekTamil_800ExtraBold
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
          fontFamily: "AnekTamil_100Thin"
        }}>
          Anek Tamil Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekTamil_200ExtraLight"
        }}>
          Anek Tamil Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekTamil_300Light"
        }}>
          Anek Tamil Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekTamil_400Regular"
        }}>
          Anek Tamil Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekTamil_500Medium"
        }}>
          Anek Tamil Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekTamil_600SemiBold"
        }}>
          Anek Tamil Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekTamil_700Bold"
        }}>
          Anek Tamil Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekTamil_800ExtraBold"
        }}>
          Anek Tamil Extra Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![AnekTamil_100Thin](./100Thin/AnekTamil_100Thin.ttf.png)|![AnekTamil_200ExtraLight](./200ExtraLight/AnekTamil_200ExtraLight.ttf.png)|![AnekTamil_300Light](./300Light/AnekTamil_300Light.ttf.png)||
|![AnekTamil_400Regular](./400Regular/AnekTamil_400Regular.ttf.png)|![AnekTamil_500Medium](./500Medium/AnekTamil_500Medium.ttf.png)|![AnekTamil_600SemiBold](./600SemiBold/AnekTamil_600SemiBold.ttf.png)||
|![AnekTamil_700Bold](./700Bold/AnekTamil_700Bold.ttf.png)|![AnekTamil_800ExtraBold](./800ExtraBold/AnekTamil_800ExtraBold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/anek-tamil` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Anek Tamil page on Google Fonts](https://fonts.google.com/specimen/Anek+Tamil) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Anek Tamil on Google Fonts](https://fonts.google.com/specimen/Anek+Tamil)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/anek-tamil)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/anek-tamil)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
