# @expo-google-fonts/hind-siliguri

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/hind-siliguri)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/hind-siliguri)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/hind-siliguri)

This package lets you use the [**Hind Siliguri**](https://fonts.google.com/specimen/Hind+Siliguri) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Hind Siliguri

![Hind Siliguri](./font-family.png)

This font family contains [5 styles](#-gallery).

- `HindSiliguri_300Light`
- `HindSiliguri_400Regular`
- `HindSiliguri_500Medium`
- `HindSiliguri_600SemiBold`
- `HindSiliguri_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/hind-siliguri expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/hind-siliguri/useFonts';
import { HindSiliguri_300Light } from '@expo-google-fonts/hind-siliguri/300Light';
import { HindSiliguri_400Regular } from '@expo-google-fonts/hind-siliguri/400Regular';
import { HindSiliguri_500Medium } from '@expo-google-fonts/hind-siliguri/500Medium';
import { HindSiliguri_600SemiBold } from '@expo-google-fonts/hind-siliguri/600SemiBold';
import { HindSiliguri_700Bold } from '@expo-google-fonts/hind-siliguri/700Bold';

export default () => {

  let [fontsLoaded] = useFonts({
    HindSiliguri_300Light, 
    HindSiliguri_400Regular, 
    HindSiliguri_500Medium, 
    HindSiliguri_600SemiBold, 
    HindSiliguri_700Bold
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
          fontFamily: "HindSiliguri_300Light"
        }}>
          Hind Siliguri Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HindSiliguri_400Regular"
        }}>
          Hind Siliguri Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HindSiliguri_500Medium"
        }}>
          Hind Siliguri Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HindSiliguri_600SemiBold"
        }}>
          Hind Siliguri Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HindSiliguri_700Bold"
        }}>
          Hind Siliguri Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![HindSiliguri_300Light](./300Light/HindSiliguri_300Light.ttf.png)|![HindSiliguri_400Regular](./400Regular/HindSiliguri_400Regular.ttf.png)|![HindSiliguri_500Medium](./500Medium/HindSiliguri_500Medium.ttf.png)||
|![HindSiliguri_600SemiBold](./600SemiBold/HindSiliguri_600SemiBold.ttf.png)|![HindSiliguri_700Bold](./700Bold/HindSiliguri_700Bold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/hind-siliguri` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Hind Siliguri page on Google Fonts](https://fonts.google.com/specimen/Hind+Siliguri) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Hind Siliguri on Google Fonts](https://fonts.google.com/specimen/Hind+Siliguri)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/hind-siliguri)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/hind-siliguri)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
