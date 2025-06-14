# @expo-google-fonts/outfit

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/outfit)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/outfit)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/outfit)

This package lets you use the [**Outfit**](https://fonts.google.com/specimen/Outfit) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Outfit

![Outfit](./font-family.png)

This font family contains [9 styles](#-gallery).

- `Outfit_100Thin`
- `Outfit_200ExtraLight`
- `Outfit_300Light`
- `Outfit_400Regular`
- `Outfit_500Medium`
- `Outfit_600SemiBold`
- `Outfit_700Bold`
- `Outfit_800ExtraBold`
- `Outfit_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/outfit expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/outfit/useFonts';
import { Outfit_100Thin } from '@expo-google-fonts/outfit/100Thin';
import { Outfit_200ExtraLight } from '@expo-google-fonts/outfit/200ExtraLight';
import { Outfit_300Light } from '@expo-google-fonts/outfit/300Light';
import { Outfit_400Regular } from '@expo-google-fonts/outfit/400Regular';
import { Outfit_500Medium } from '@expo-google-fonts/outfit/500Medium';
import { Outfit_600SemiBold } from '@expo-google-fonts/outfit/600SemiBold';
import { Outfit_700Bold } from '@expo-google-fonts/outfit/700Bold';
import { Outfit_800ExtraBold } from '@expo-google-fonts/outfit/800ExtraBold';
import { Outfit_900Black } from '@expo-google-fonts/outfit/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    Outfit_100Thin, 
    Outfit_200ExtraLight, 
    Outfit_300Light, 
    Outfit_400Regular, 
    Outfit_500Medium, 
    Outfit_600SemiBold, 
    Outfit_700Bold, 
    Outfit_800ExtraBold, 
    Outfit_900Black
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
          fontFamily: "Outfit_100Thin"
        }}>
          Outfit Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Outfit_200ExtraLight"
        }}>
          Outfit Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Outfit_300Light"
        }}>
          Outfit Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Outfit_400Regular"
        }}>
          Outfit Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Outfit_500Medium"
        }}>
          Outfit Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Outfit_600SemiBold"
        }}>
          Outfit Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Outfit_700Bold"
        }}>
          Outfit Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Outfit_800ExtraBold"
        }}>
          Outfit Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Outfit_900Black"
        }}>
          Outfit Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Outfit_100Thin](./100Thin/Outfit_100Thin.ttf.png)|![Outfit_200ExtraLight](./200ExtraLight/Outfit_200ExtraLight.ttf.png)|![Outfit_300Light](./300Light/Outfit_300Light.ttf.png)||
|![Outfit_400Regular](./400Regular/Outfit_400Regular.ttf.png)|![Outfit_500Medium](./500Medium/Outfit_500Medium.ttf.png)|![Outfit_600SemiBold](./600SemiBold/Outfit_600SemiBold.ttf.png)||
|![Outfit_700Bold](./700Bold/Outfit_700Bold.ttf.png)|![Outfit_800ExtraBold](./800ExtraBold/Outfit_800ExtraBold.ttf.png)|![Outfit_900Black](./900Black/Outfit_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/outfit` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Outfit page on Google Fonts](https://fonts.google.com/specimen/Outfit) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Outfit on Google Fonts](https://fonts.google.com/specimen/Outfit)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/outfit)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/outfit)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
