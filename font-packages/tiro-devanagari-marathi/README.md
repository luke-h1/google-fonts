# @expo-google-fonts/tiro-devanagari-marathi

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/tiro-devanagari-marathi)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/tiro-devanagari-marathi)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/tiro-devanagari-marathi)

This package lets you use the [**Tiro Devanagari Marathi**](https://fonts.google.com/specimen/Tiro+Devanagari+Marathi) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Tiro Devanagari Marathi

![Tiro Devanagari Marathi](./font-family.png)

This font family contains [2 styles](#-gallery).

- `TiroDevanagariMarathi_400Regular`
- `TiroDevanagariMarathi_400Regular_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/tiro-devanagari-marathi expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/tiro-devanagari-marathi/useFonts';
import { TiroDevanagariMarathi_400Regular } from '@expo-google-fonts/tiro-devanagari-marathi/400Regular';
import { TiroDevanagariMarathi_400Regular_Italic } from '@expo-google-fonts/tiro-devanagari-marathi/400Regular_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    TiroDevanagariMarathi_400Regular, 
    TiroDevanagariMarathi_400Regular_Italic
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
          fontFamily: "TiroDevanagariMarathi_400Regular"
        }}>
          Tiro Devanagari Marathi Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "TiroDevanagariMarathi_400Regular_Italic"
        }}>
          Tiro Devanagari Marathi Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![TiroDevanagariMarathi_400Regular](./400Regular/TiroDevanagariMarathi_400Regular.ttf.png)|![TiroDevanagariMarathi_400Regular_Italic](./400Regular_Italic/TiroDevanagariMarathi_400Regular_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/tiro-devanagari-marathi` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Tiro Devanagari Marathi page on Google Fonts](https://fonts.google.com/specimen/Tiro+Devanagari+Marathi) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Tiro Devanagari Marathi on Google Fonts](https://fonts.google.com/specimen/Tiro+Devanagari+Marathi)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/tiro-devanagari-marathi)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/tiro-devanagari-marathi)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
