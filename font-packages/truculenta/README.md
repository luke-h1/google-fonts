# @expo-google-fonts/truculenta

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/truculenta)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/truculenta)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/truculenta)

This package lets you use the [**Truculenta**](https://fonts.google.com/specimen/Truculenta) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Truculenta

![Truculenta](./font-family.png)

This font family contains [9 styles](#-gallery).

- `Truculenta_100Thin`
- `Truculenta_200ExtraLight`
- `Truculenta_300Light`
- `Truculenta_400Regular`
- `Truculenta_500Medium`
- `Truculenta_600SemiBold`
- `Truculenta_700Bold`
- `Truculenta_800ExtraBold`
- `Truculenta_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/truculenta expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/truculenta/useFonts';
import { Truculenta_100Thin } from '@expo-google-fonts/truculenta/100Thin';
import { Truculenta_200ExtraLight } from '@expo-google-fonts/truculenta/200ExtraLight';
import { Truculenta_300Light } from '@expo-google-fonts/truculenta/300Light';
import { Truculenta_400Regular } from '@expo-google-fonts/truculenta/400Regular';
import { Truculenta_500Medium } from '@expo-google-fonts/truculenta/500Medium';
import { Truculenta_600SemiBold } from '@expo-google-fonts/truculenta/600SemiBold';
import { Truculenta_700Bold } from '@expo-google-fonts/truculenta/700Bold';
import { Truculenta_800ExtraBold } from '@expo-google-fonts/truculenta/800ExtraBold';
import { Truculenta_900Black } from '@expo-google-fonts/truculenta/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    Truculenta_100Thin, 
    Truculenta_200ExtraLight, 
    Truculenta_300Light, 
    Truculenta_400Regular, 
    Truculenta_500Medium, 
    Truculenta_600SemiBold, 
    Truculenta_700Bold, 
    Truculenta_800ExtraBold, 
    Truculenta_900Black
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
          fontFamily: "Truculenta_100Thin"
        }}>
          Truculenta Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Truculenta_200ExtraLight"
        }}>
          Truculenta Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Truculenta_300Light"
        }}>
          Truculenta Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Truculenta_400Regular"
        }}>
          Truculenta Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Truculenta_500Medium"
        }}>
          Truculenta Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Truculenta_600SemiBold"
        }}>
          Truculenta Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Truculenta_700Bold"
        }}>
          Truculenta Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Truculenta_800ExtraBold"
        }}>
          Truculenta Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Truculenta_900Black"
        }}>
          Truculenta Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Truculenta_100Thin](./100Thin/Truculenta_100Thin.ttf.png)|![Truculenta_200ExtraLight](./200ExtraLight/Truculenta_200ExtraLight.ttf.png)|![Truculenta_300Light](./300Light/Truculenta_300Light.ttf.png)||
|![Truculenta_400Regular](./400Regular/Truculenta_400Regular.ttf.png)|![Truculenta_500Medium](./500Medium/Truculenta_500Medium.ttf.png)|![Truculenta_600SemiBold](./600SemiBold/Truculenta_600SemiBold.ttf.png)||
|![Truculenta_700Bold](./700Bold/Truculenta_700Bold.ttf.png)|![Truculenta_800ExtraBold](./800ExtraBold/Truculenta_800ExtraBold.ttf.png)|![Truculenta_900Black](./900Black/Truculenta_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/truculenta` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Truculenta page on Google Fonts](https://fonts.google.com/specimen/Truculenta) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Truculenta on Google Fonts](https://fonts.google.com/specimen/Truculenta)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/truculenta)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/truculenta)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
