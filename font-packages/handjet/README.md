# @expo-google-fonts/handjet

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/handjet)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/handjet)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/handjet)

This package lets you use the [**Handjet**](https://fonts.google.com/specimen/Handjet) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Handjet

![Handjet](./font-family.png)

This font family contains [9 styles](#-gallery).

- `Handjet_100Thin`
- `Handjet_200ExtraLight`
- `Handjet_300Light`
- `Handjet_400Regular`
- `Handjet_500Medium`
- `Handjet_600SemiBold`
- `Handjet_700Bold`
- `Handjet_800ExtraBold`
- `Handjet_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/handjet expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/handjet/useFonts';
import { Handjet_100Thin } from '@expo-google-fonts/handjet/100Thin';
import { Handjet_200ExtraLight } from '@expo-google-fonts/handjet/200ExtraLight';
import { Handjet_300Light } from '@expo-google-fonts/handjet/300Light';
import { Handjet_400Regular } from '@expo-google-fonts/handjet/400Regular';
import { Handjet_500Medium } from '@expo-google-fonts/handjet/500Medium';
import { Handjet_600SemiBold } from '@expo-google-fonts/handjet/600SemiBold';
import { Handjet_700Bold } from '@expo-google-fonts/handjet/700Bold';
import { Handjet_800ExtraBold } from '@expo-google-fonts/handjet/800ExtraBold';
import { Handjet_900Black } from '@expo-google-fonts/handjet/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    Handjet_100Thin, 
    Handjet_200ExtraLight, 
    Handjet_300Light, 
    Handjet_400Regular, 
    Handjet_500Medium, 
    Handjet_600SemiBold, 
    Handjet_700Bold, 
    Handjet_800ExtraBold, 
    Handjet_900Black
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
          fontFamily: "Handjet_100Thin"
        }}>
          Handjet Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Handjet_200ExtraLight"
        }}>
          Handjet Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Handjet_300Light"
        }}>
          Handjet Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Handjet_400Regular"
        }}>
          Handjet Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Handjet_500Medium"
        }}>
          Handjet Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Handjet_600SemiBold"
        }}>
          Handjet Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Handjet_700Bold"
        }}>
          Handjet Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Handjet_800ExtraBold"
        }}>
          Handjet Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Handjet_900Black"
        }}>
          Handjet Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Handjet_100Thin](./100Thin/Handjet_100Thin.ttf.png)|![Handjet_200ExtraLight](./200ExtraLight/Handjet_200ExtraLight.ttf.png)|![Handjet_300Light](./300Light/Handjet_300Light.ttf.png)||
|![Handjet_400Regular](./400Regular/Handjet_400Regular.ttf.png)|![Handjet_500Medium](./500Medium/Handjet_500Medium.ttf.png)|![Handjet_600SemiBold](./600SemiBold/Handjet_600SemiBold.ttf.png)||
|![Handjet_700Bold](./700Bold/Handjet_700Bold.ttf.png)|![Handjet_800ExtraBold](./800ExtraBold/Handjet_800ExtraBold.ttf.png)|![Handjet_900Black](./900Black/Handjet_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/handjet` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Handjet page on Google Fonts](https://fonts.google.com/specimen/Handjet) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Handjet on Google Fonts](https://fonts.google.com/specimen/Handjet)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/handjet)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/handjet)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
