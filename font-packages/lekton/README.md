# @expo-google-fonts/lekton

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/lekton)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/lekton)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/lekton)

This package lets you use the [**Lekton**](https://fonts.google.com/specimen/Lekton) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Lekton

![Lekton](./font-family.png)

This font family contains [3 styles](#-gallery).

- `Lekton_400Regular`
- `Lekton_400Regular_Italic`
- `Lekton_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/lekton expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/lekton/useFonts';
import { Lekton_400Regular } from '@expo-google-fonts/lekton/400Regular';
import { Lekton_400Regular_Italic } from '@expo-google-fonts/lekton/400Regular_Italic';
import { Lekton_700Bold } from '@expo-google-fonts/lekton/700Bold';

export default () => {

  let [fontsLoaded] = useFonts({
    Lekton_400Regular, 
    Lekton_400Regular_Italic, 
    Lekton_700Bold
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
          fontFamily: "Lekton_400Regular"
        }}>
          Lekton Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Lekton_400Regular_Italic"
        }}>
          Lekton Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Lekton_700Bold"
        }}>
          Lekton Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Lekton_400Regular](./400Regular/Lekton_400Regular.ttf.png)|![Lekton_400Regular_Italic](./400Regular_Italic/Lekton_400Regular_Italic.ttf.png)|![Lekton_700Bold](./700Bold/Lekton_700Bold.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/lekton` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Lekton page on Google Fonts](https://fonts.google.com/specimen/Lekton) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Lekton on Google Fonts](https://fonts.google.com/specimen/Lekton)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/lekton)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/lekton)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
