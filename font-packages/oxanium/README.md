# @expo-google-fonts/oxanium

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/oxanium)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/oxanium)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/oxanium)

This package lets you use the [**Oxanium**](https://fonts.google.com/specimen/Oxanium) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Oxanium

![Oxanium](./font-family.png)

This font family contains [7 styles](#-gallery).

- `Oxanium_200ExtraLight`
- `Oxanium_300Light`
- `Oxanium_400Regular`
- `Oxanium_500Medium`
- `Oxanium_600SemiBold`
- `Oxanium_700Bold`
- `Oxanium_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/oxanium expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/oxanium/useFonts';
import { Oxanium_200ExtraLight } from '@expo-google-fonts/oxanium/200ExtraLight';
import { Oxanium_300Light } from '@expo-google-fonts/oxanium/300Light';
import { Oxanium_400Regular } from '@expo-google-fonts/oxanium/400Regular';
import { Oxanium_500Medium } from '@expo-google-fonts/oxanium/500Medium';
import { Oxanium_600SemiBold } from '@expo-google-fonts/oxanium/600SemiBold';
import { Oxanium_700Bold } from '@expo-google-fonts/oxanium/700Bold';
import { Oxanium_800ExtraBold } from '@expo-google-fonts/oxanium/800ExtraBold';

export default () => {

  let [fontsLoaded] = useFonts({
    Oxanium_200ExtraLight, 
    Oxanium_300Light, 
    Oxanium_400Regular, 
    Oxanium_500Medium, 
    Oxanium_600SemiBold, 
    Oxanium_700Bold, 
    Oxanium_800ExtraBold
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
          fontFamily: "Oxanium_200ExtraLight"
        }}>
          Oxanium Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Oxanium_300Light"
        }}>
          Oxanium Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Oxanium_400Regular"
        }}>
          Oxanium Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Oxanium_500Medium"
        }}>
          Oxanium Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Oxanium_600SemiBold"
        }}>
          Oxanium Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Oxanium_700Bold"
        }}>
          Oxanium Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Oxanium_800ExtraBold"
        }}>
          Oxanium Extra Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Oxanium_200ExtraLight](./200ExtraLight/Oxanium_200ExtraLight.ttf.png)|![Oxanium_300Light](./300Light/Oxanium_300Light.ttf.png)|![Oxanium_400Regular](./400Regular/Oxanium_400Regular.ttf.png)||
|![Oxanium_500Medium](./500Medium/Oxanium_500Medium.ttf.png)|![Oxanium_600SemiBold](./600SemiBold/Oxanium_600SemiBold.ttf.png)|![Oxanium_700Bold](./700Bold/Oxanium_700Bold.ttf.png)||
|![Oxanium_800ExtraBold](./800ExtraBold/Oxanium_800ExtraBold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/oxanium` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Oxanium page on Google Fonts](https://fonts.google.com/specimen/Oxanium) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Oxanium on Google Fonts](https://fonts.google.com/specimen/Oxanium)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/oxanium)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/oxanium)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
