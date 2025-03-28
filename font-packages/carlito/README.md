# @expo-google-fonts/carlito

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/carlito)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/carlito)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/carlito)

This package lets you use the [**Carlito**](https://fonts.google.com/specimen/Carlito) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Carlito

![Carlito](./font-family.png)

This font family contains [4 styles](#-gallery).

- `Carlito_400Regular`
- `Carlito_400Regular_Italic`
- `Carlito_700Bold`
- `Carlito_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/carlito expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/carlito/useFonts';
import { Carlito_400Regular } from '@expo-google-fonts/carlito/400Regular';
import { Carlito_400Regular_Italic } from '@expo-google-fonts/carlito/400Regular_Italic';
import { Carlito_700Bold } from '@expo-google-fonts/carlito/700Bold';
import { Carlito_700Bold_Italic } from '@expo-google-fonts/carlito/700Bold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Carlito_400Regular, 
    Carlito_400Regular_Italic, 
    Carlito_700Bold, 
    Carlito_700Bold_Italic
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
          fontFamily: "Carlito_400Regular"
        }}>
          Carlito Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Carlito_400Regular_Italic"
        }}>
          Carlito Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Carlito_700Bold"
        }}>
          Carlito Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Carlito_700Bold_Italic"
        }}>
          Carlito Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Carlito_400Regular](./400Regular/Carlito_400Regular.ttf.png)|![Carlito_400Regular_Italic](./400Regular_Italic/Carlito_400Regular_Italic.ttf.png)|![Carlito_700Bold](./700Bold/Carlito_700Bold.ttf.png)||
|![Carlito_700Bold_Italic](./700Bold_Italic/Carlito_700Bold_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/carlito` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Carlito page on Google Fonts](https://fonts.google.com/specimen/Carlito) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Carlito on Google Fonts](https://fonts.google.com/specimen/Carlito)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/carlito)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/carlito)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
