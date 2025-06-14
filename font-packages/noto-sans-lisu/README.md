# @expo-google-fonts/noto-sans-lisu

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-sans-lisu)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-sans-lisu)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-sans-lisu)

This package lets you use the [**Noto Sans Lisu**](https://fonts.google.com/specimen/Noto+Sans+Lisu) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Sans Lisu

![Noto Sans Lisu](./font-family.png)

This font family contains [4 styles](#-gallery).

- `NotoSansLisu_400Regular`
- `NotoSansLisu_500Medium`
- `NotoSansLisu_600SemiBold`
- `NotoSansLisu_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/noto-sans-lisu expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/noto-sans-lisu/useFonts';
import { NotoSansLisu_400Regular } from '@expo-google-fonts/noto-sans-lisu/400Regular';
import { NotoSansLisu_500Medium } from '@expo-google-fonts/noto-sans-lisu/500Medium';
import { NotoSansLisu_600SemiBold } from '@expo-google-fonts/noto-sans-lisu/600SemiBold';
import { NotoSansLisu_700Bold } from '@expo-google-fonts/noto-sans-lisu/700Bold';

export default () => {

  let [fontsLoaded] = useFonts({
    NotoSansLisu_400Regular, 
    NotoSansLisu_500Medium, 
    NotoSansLisu_600SemiBold, 
    NotoSansLisu_700Bold
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
          fontFamily: "NotoSansLisu_400Regular"
        }}>
          Noto Sans Lisu Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansLisu_500Medium"
        }}>
          Noto Sans Lisu Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansLisu_600SemiBold"
        }}>
          Noto Sans Lisu Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansLisu_700Bold"
        }}>
          Noto Sans Lisu Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSansLisu_400Regular](./400Regular/NotoSansLisu_400Regular.ttf.png)|![NotoSansLisu_500Medium](./500Medium/NotoSansLisu_500Medium.ttf.png)|![NotoSansLisu_600SemiBold](./600SemiBold/NotoSansLisu_600SemiBold.ttf.png)||
|![NotoSansLisu_700Bold](./700Bold/NotoSansLisu_700Bold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/noto-sans-lisu` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Sans Lisu page on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Lisu) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Sans Lisu on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Lisu)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-sans-lisu)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-sans-lisu)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
