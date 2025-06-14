# @expo-google-fonts/suwannaphum

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/suwannaphum)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/suwannaphum)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/suwannaphum)

This package lets you use the [**Suwannaphum**](https://fonts.google.com/specimen/Suwannaphum) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Suwannaphum

![Suwannaphum](./font-family.png)

This font family contains [5 styles](#-gallery).

- `Suwannaphum_100Thin`
- `Suwannaphum_300Light`
- `Suwannaphum_400Regular`
- `Suwannaphum_700Bold`
- `Suwannaphum_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/suwannaphum expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/suwannaphum/useFonts';
import { Suwannaphum_100Thin } from '@expo-google-fonts/suwannaphum/100Thin';
import { Suwannaphum_300Light } from '@expo-google-fonts/suwannaphum/300Light';
import { Suwannaphum_400Regular } from '@expo-google-fonts/suwannaphum/400Regular';
import { Suwannaphum_700Bold } from '@expo-google-fonts/suwannaphum/700Bold';
import { Suwannaphum_900Black } from '@expo-google-fonts/suwannaphum/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    Suwannaphum_100Thin, 
    Suwannaphum_300Light, 
    Suwannaphum_400Regular, 
    Suwannaphum_700Bold, 
    Suwannaphum_900Black
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
          fontFamily: "Suwannaphum_100Thin"
        }}>
          Suwannaphum Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Suwannaphum_300Light"
        }}>
          Suwannaphum Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Suwannaphum_400Regular"
        }}>
          Suwannaphum Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Suwannaphum_700Bold"
        }}>
          Suwannaphum Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Suwannaphum_900Black"
        }}>
          Suwannaphum Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Suwannaphum_100Thin](./100Thin/Suwannaphum_100Thin.ttf.png)|![Suwannaphum_300Light](./300Light/Suwannaphum_300Light.ttf.png)|![Suwannaphum_400Regular](./400Regular/Suwannaphum_400Regular.ttf.png)||
|![Suwannaphum_700Bold](./700Bold/Suwannaphum_700Bold.ttf.png)|![Suwannaphum_900Black](./900Black/Suwannaphum_900Black.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/suwannaphum` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Suwannaphum page on Google Fonts](https://fonts.google.com/specimen/Suwannaphum) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Suwannaphum on Google Fonts](https://fonts.google.com/specimen/Suwannaphum)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/suwannaphum)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/suwannaphum)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
