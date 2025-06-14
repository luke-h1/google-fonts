# @expo-google-fonts/pontano-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/pontano-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/pontano-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/pontano-sans)

This package lets you use the [**Pontano Sans**](https://fonts.google.com/specimen/Pontano+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Pontano Sans

![Pontano Sans](./font-family.png)

This font family contains [5 styles](#-gallery).

- `PontanoSans_300Light`
- `PontanoSans_400Regular`
- `PontanoSans_500Medium`
- `PontanoSans_600SemiBold`
- `PontanoSans_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/pontano-sans expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/pontano-sans/useFonts';
import { PontanoSans_300Light } from '@expo-google-fonts/pontano-sans/300Light';
import { PontanoSans_400Regular } from '@expo-google-fonts/pontano-sans/400Regular';
import { PontanoSans_500Medium } from '@expo-google-fonts/pontano-sans/500Medium';
import { PontanoSans_600SemiBold } from '@expo-google-fonts/pontano-sans/600SemiBold';
import { PontanoSans_700Bold } from '@expo-google-fonts/pontano-sans/700Bold';

export default () => {

  let [fontsLoaded] = useFonts({
    PontanoSans_300Light, 
    PontanoSans_400Regular, 
    PontanoSans_500Medium, 
    PontanoSans_600SemiBold, 
    PontanoSans_700Bold
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
          fontFamily: "PontanoSans_300Light"
        }}>
          Pontano Sans Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PontanoSans_400Regular"
        }}>
          Pontano Sans Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PontanoSans_500Medium"
        }}>
          Pontano Sans Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PontanoSans_600SemiBold"
        }}>
          Pontano Sans Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PontanoSans_700Bold"
        }}>
          Pontano Sans Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![PontanoSans_300Light](./300Light/PontanoSans_300Light.ttf.png)|![PontanoSans_400Regular](./400Regular/PontanoSans_400Regular.ttf.png)|![PontanoSans_500Medium](./500Medium/PontanoSans_500Medium.ttf.png)||
|![PontanoSans_600SemiBold](./600SemiBold/PontanoSans_600SemiBold.ttf.png)|![PontanoSans_700Bold](./700Bold/PontanoSans_700Bold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/pontano-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Pontano Sans page on Google Fonts](https://fonts.google.com/specimen/Pontano+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Pontano Sans on Google Fonts](https://fonts.google.com/specimen/Pontano+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/pontano-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/pontano-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
