# @expo-google-fonts/amiko

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/amiko)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/amiko)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/amiko)

This package lets you use the [**Amiko**](https://fonts.google.com/specimen/Amiko) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Amiko

![Amiko](./font-family.png)

This font family contains [3 styles](#-gallery).

- `Amiko_400Regular`
- `Amiko_600SemiBold`
- `Amiko_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/amiko expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/amiko/useFonts';
import { Amiko_400Regular } from '@expo-google-fonts/amiko/400Regular';
import { Amiko_600SemiBold } from '@expo-google-fonts/amiko/600SemiBold';
import { Amiko_700Bold } from '@expo-google-fonts/amiko/700Bold';

export default () => {

  let [fontsLoaded] = useFonts({
    Amiko_400Regular, 
    Amiko_600SemiBold, 
    Amiko_700Bold
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
          fontFamily: "Amiko_400Regular"
        }}>
          Amiko Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Amiko_600SemiBold"
        }}>
          Amiko Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Amiko_700Bold"
        }}>
          Amiko Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Amiko_400Regular](./400Regular/Amiko_400Regular.ttf.png)|![Amiko_600SemiBold](./600SemiBold/Amiko_600SemiBold.ttf.png)|![Amiko_700Bold](./700Bold/Amiko_700Bold.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/amiko` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Amiko page on Google Fonts](https://fonts.google.com/specimen/Amiko) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Amiko on Google Fonts](https://fonts.google.com/specimen/Amiko)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/amiko)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/amiko)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
