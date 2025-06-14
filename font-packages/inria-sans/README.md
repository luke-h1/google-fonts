# @expo-google-fonts/inria-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/inria-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/inria-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/inria-sans)

This package lets you use the [**Inria Sans**](https://fonts.google.com/specimen/Inria+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Inria Sans

![Inria Sans](./font-family.png)

This font family contains [6 styles](#-gallery).

- `InriaSans_300Light`
- `InriaSans_300Light_Italic`
- `InriaSans_400Regular`
- `InriaSans_400Regular_Italic`
- `InriaSans_700Bold`
- `InriaSans_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/inria-sans expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/inria-sans/useFonts';
import { InriaSans_300Light } from '@expo-google-fonts/inria-sans/300Light';
import { InriaSans_300Light_Italic } from '@expo-google-fonts/inria-sans/300Light_Italic';
import { InriaSans_400Regular } from '@expo-google-fonts/inria-sans/400Regular';
import { InriaSans_400Regular_Italic } from '@expo-google-fonts/inria-sans/400Regular_Italic';
import { InriaSans_700Bold } from '@expo-google-fonts/inria-sans/700Bold';
import { InriaSans_700Bold_Italic } from '@expo-google-fonts/inria-sans/700Bold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    InriaSans_300Light, 
    InriaSans_300Light_Italic, 
    InriaSans_400Regular, 
    InriaSans_400Regular_Italic, 
    InriaSans_700Bold, 
    InriaSans_700Bold_Italic
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
          fontFamily: "InriaSans_300Light"
        }}>
          Inria Sans Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "InriaSans_300Light_Italic"
        }}>
          Inria Sans Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "InriaSans_400Regular"
        }}>
          Inria Sans Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "InriaSans_400Regular_Italic"
        }}>
          Inria Sans Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "InriaSans_700Bold"
        }}>
          Inria Sans Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "InriaSans_700Bold_Italic"
        }}>
          Inria Sans Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![InriaSans_300Light](./300Light/InriaSans_300Light.ttf.png)|![InriaSans_300Light_Italic](./300Light_Italic/InriaSans_300Light_Italic.ttf.png)|![InriaSans_400Regular](./400Regular/InriaSans_400Regular.ttf.png)||
|![InriaSans_400Regular_Italic](./400Regular_Italic/InriaSans_400Regular_Italic.ttf.png)|![InriaSans_700Bold](./700Bold/InriaSans_700Bold.ttf.png)|![InriaSans_700Bold_Italic](./700Bold_Italic/InriaSans_700Bold_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/inria-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Inria Sans page on Google Fonts](https://fonts.google.com/specimen/Inria+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Inria Sans on Google Fonts](https://fonts.google.com/specimen/Inria+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/inria-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/inria-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
