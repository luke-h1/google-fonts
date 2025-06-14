# @expo-google-fonts/kreon

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/kreon)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/kreon)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/kreon)

This package lets you use the [**Kreon**](https://fonts.google.com/specimen/Kreon) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Kreon

![Kreon](./font-family.png)

This font family contains [5 styles](#-gallery).

- `Kreon_300Light`
- `Kreon_400Regular`
- `Kreon_500Medium`
- `Kreon_600SemiBold`
- `Kreon_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/kreon expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/kreon/useFonts';
import { Kreon_300Light } from '@expo-google-fonts/kreon/300Light';
import { Kreon_400Regular } from '@expo-google-fonts/kreon/400Regular';
import { Kreon_500Medium } from '@expo-google-fonts/kreon/500Medium';
import { Kreon_600SemiBold } from '@expo-google-fonts/kreon/600SemiBold';
import { Kreon_700Bold } from '@expo-google-fonts/kreon/700Bold';

export default () => {

  let [fontsLoaded] = useFonts({
    Kreon_300Light, 
    Kreon_400Regular, 
    Kreon_500Medium, 
    Kreon_600SemiBold, 
    Kreon_700Bold
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
          fontFamily: "Kreon_300Light"
        }}>
          Kreon Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kreon_400Regular"
        }}>
          Kreon Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kreon_500Medium"
        }}>
          Kreon Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kreon_600SemiBold"
        }}>
          Kreon Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kreon_700Bold"
        }}>
          Kreon Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Kreon_300Light](./300Light/Kreon_300Light.ttf.png)|![Kreon_400Regular](./400Regular/Kreon_400Regular.ttf.png)|![Kreon_500Medium](./500Medium/Kreon_500Medium.ttf.png)||
|![Kreon_600SemiBold](./600SemiBold/Kreon_600SemiBold.ttf.png)|![Kreon_700Bold](./700Bold/Kreon_700Bold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/kreon` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Kreon page on Google Fonts](https://fonts.google.com/specimen/Kreon) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Kreon on Google Fonts](https://fonts.google.com/specimen/Kreon)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/kreon)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/kreon)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
