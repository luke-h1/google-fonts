# @expo-google-fonts/noto-serif-toto

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-serif-toto)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-serif-toto)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-serif-toto)

This package lets you use the [**Noto Serif Toto**](https://fonts.google.com/specimen/Noto+Serif+Toto) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Serif Toto

![Noto Serif Toto](./font-family.png)

This font family contains [4 styles](#-gallery).

- `NotoSerifToto_400Regular`
- `NotoSerifToto_500Medium`
- `NotoSerifToto_600SemiBold`
- `NotoSerifToto_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/noto-serif-toto expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/noto-serif-toto/useFonts';
import { NotoSerifToto_400Regular } from '@expo-google-fonts/noto-serif-toto/400Regular';
import { NotoSerifToto_500Medium } from '@expo-google-fonts/noto-serif-toto/500Medium';
import { NotoSerifToto_600SemiBold } from '@expo-google-fonts/noto-serif-toto/600SemiBold';
import { NotoSerifToto_700Bold } from '@expo-google-fonts/noto-serif-toto/700Bold';

export default () => {

  let [fontsLoaded] = useFonts({
    NotoSerifToto_400Regular, 
    NotoSerifToto_500Medium, 
    NotoSerifToto_600SemiBold, 
    NotoSerifToto_700Bold
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
          fontFamily: "NotoSerifToto_400Regular"
        }}>
          Noto Serif Toto Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifToto_500Medium"
        }}>
          Noto Serif Toto Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifToto_600SemiBold"
        }}>
          Noto Serif Toto Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSerifToto_700Bold"
        }}>
          Noto Serif Toto Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSerifToto_400Regular](./400Regular/NotoSerifToto_400Regular.ttf.png)|![NotoSerifToto_500Medium](./500Medium/NotoSerifToto_500Medium.ttf.png)|![NotoSerifToto_600SemiBold](./600SemiBold/NotoSerifToto_600SemiBold.ttf.png)||
|![NotoSerifToto_700Bold](./700Bold/NotoSerifToto_700Bold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/noto-serif-toto` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Serif Toto page on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Toto) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Serif Toto on Google Fonts](https://fonts.google.com/specimen/Noto+Serif+Toto)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-serif-toto)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-serif-toto)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
