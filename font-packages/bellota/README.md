# @expo-google-fonts/bellota

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/bellota)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/bellota)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/bellota)

This package lets you use the [**Bellota**](https://fonts.google.com/specimen/Bellota) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Bellota

![Bellota](./font-family.png)

This font family contains [6 styles](#-gallery).

- `Bellota_300Light`
- `Bellota_300Light_Italic`
- `Bellota_400Regular`
- `Bellota_400Regular_Italic`
- `Bellota_700Bold`
- `Bellota_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/bellota expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/bellota/useFonts';
import { Bellota_300Light } from '@expo-google-fonts/bellota/300Light';
import { Bellota_300Light_Italic } from '@expo-google-fonts/bellota/300Light_Italic';
import { Bellota_400Regular } from '@expo-google-fonts/bellota/400Regular';
import { Bellota_400Regular_Italic } from '@expo-google-fonts/bellota/400Regular_Italic';
import { Bellota_700Bold } from '@expo-google-fonts/bellota/700Bold';
import { Bellota_700Bold_Italic } from '@expo-google-fonts/bellota/700Bold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Bellota_300Light, 
    Bellota_300Light_Italic, 
    Bellota_400Regular, 
    Bellota_400Regular_Italic, 
    Bellota_700Bold, 
    Bellota_700Bold_Italic
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
          fontFamily: "Bellota_300Light"
        }}>
          Bellota Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Bellota_300Light_Italic"
        }}>
          Bellota Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Bellota_400Regular"
        }}>
          Bellota Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Bellota_400Regular_Italic"
        }}>
          Bellota Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Bellota_700Bold"
        }}>
          Bellota Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Bellota_700Bold_Italic"
        }}>
          Bellota Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Bellota_300Light](./300Light/Bellota_300Light.ttf.png)|![Bellota_300Light_Italic](./300Light_Italic/Bellota_300Light_Italic.ttf.png)|![Bellota_400Regular](./400Regular/Bellota_400Regular.ttf.png)||
|![Bellota_400Regular_Italic](./400Regular_Italic/Bellota_400Regular_Italic.ttf.png)|![Bellota_700Bold](./700Bold/Bellota_700Bold.ttf.png)|![Bellota_700Bold_Italic](./700Bold_Italic/Bellota_700Bold_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/bellota` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Bellota page on Google Fonts](https://fonts.google.com/specimen/Bellota) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Bellota on Google Fonts](https://fonts.google.com/specimen/Bellota)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/bellota)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/bellota)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
