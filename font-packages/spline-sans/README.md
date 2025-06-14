# @expo-google-fonts/spline-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/spline-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/spline-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/spline-sans)

This package lets you use the [**Spline Sans**](https://fonts.google.com/specimen/Spline+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Spline Sans

![Spline Sans](./font-family.png)

This font family contains [5 styles](#-gallery).

- `SplineSans_300Light`
- `SplineSans_400Regular`
- `SplineSans_500Medium`
- `SplineSans_600SemiBold`
- `SplineSans_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/spline-sans expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/spline-sans/useFonts';
import { SplineSans_300Light } from '@expo-google-fonts/spline-sans/300Light';
import { SplineSans_400Regular } from '@expo-google-fonts/spline-sans/400Regular';
import { SplineSans_500Medium } from '@expo-google-fonts/spline-sans/500Medium';
import { SplineSans_600SemiBold } from '@expo-google-fonts/spline-sans/600SemiBold';
import { SplineSans_700Bold } from '@expo-google-fonts/spline-sans/700Bold';

export default () => {

  let [fontsLoaded] = useFonts({
    SplineSans_300Light, 
    SplineSans_400Regular, 
    SplineSans_500Medium, 
    SplineSans_600SemiBold, 
    SplineSans_700Bold
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
          fontFamily: "SplineSans_300Light"
        }}>
          Spline Sans Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SplineSans_400Regular"
        }}>
          Spline Sans Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SplineSans_500Medium"
        }}>
          Spline Sans Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SplineSans_600SemiBold"
        }}>
          Spline Sans Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SplineSans_700Bold"
        }}>
          Spline Sans Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![SplineSans_300Light](./300Light/SplineSans_300Light.ttf.png)|![SplineSans_400Regular](./400Regular/SplineSans_400Regular.ttf.png)|![SplineSans_500Medium](./500Medium/SplineSans_500Medium.ttf.png)||
|![SplineSans_600SemiBold](./600SemiBold/SplineSans_600SemiBold.ttf.png)|![SplineSans_700Bold](./700Bold/SplineSans_700Bold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/spline-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Spline Sans page on Google Fonts](https://fonts.google.com/specimen/Spline+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Spline Sans on Google Fonts](https://fonts.google.com/specimen/Spline+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/spline-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/spline-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
