# @expo-google-fonts/arimo

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/arimo)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/arimo)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/arimo)

This package lets you use the [**Arimo**](https://fonts.google.com/specimen/Arimo) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Arimo

![Arimo](./font-family.png)

This font family contains [8 styles](#-gallery).

- `Arimo_400Regular`
- `Arimo_500Medium`
- `Arimo_600SemiBold`
- `Arimo_700Bold`
- `Arimo_400Regular_Italic`
- `Arimo_500Medium_Italic`
- `Arimo_600SemiBold_Italic`
- `Arimo_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/arimo expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/arimo/useFonts';
import { Arimo_400Regular } from '@expo-google-fonts/arimo/400Regular';
import { Arimo_500Medium } from '@expo-google-fonts/arimo/500Medium';
import { Arimo_600SemiBold } from '@expo-google-fonts/arimo/600SemiBold';
import { Arimo_700Bold } from '@expo-google-fonts/arimo/700Bold';
import { Arimo_400Regular_Italic } from '@expo-google-fonts/arimo/400Regular_Italic';
import { Arimo_500Medium_Italic } from '@expo-google-fonts/arimo/500Medium_Italic';
import { Arimo_600SemiBold_Italic } from '@expo-google-fonts/arimo/600SemiBold_Italic';
import { Arimo_700Bold_Italic } from '@expo-google-fonts/arimo/700Bold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Arimo_400Regular, 
    Arimo_500Medium, 
    Arimo_600SemiBold, 
    Arimo_700Bold, 
    Arimo_400Regular_Italic, 
    Arimo_500Medium_Italic, 
    Arimo_600SemiBold_Italic, 
    Arimo_700Bold_Italic
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
          fontFamily: "Arimo_400Regular"
        }}>
          Arimo Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Arimo_500Medium"
        }}>
          Arimo Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Arimo_600SemiBold"
        }}>
          Arimo Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Arimo_700Bold"
        }}>
          Arimo Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Arimo_400Regular_Italic"
        }}>
          Arimo Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Arimo_500Medium_Italic"
        }}>
          Arimo Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Arimo_600SemiBold_Italic"
        }}>
          Arimo Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Arimo_700Bold_Italic"
        }}>
          Arimo Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Arimo_400Regular](./400Regular/Arimo_400Regular.ttf.png)|![Arimo_500Medium](./500Medium/Arimo_500Medium.ttf.png)|![Arimo_600SemiBold](./600SemiBold/Arimo_600SemiBold.ttf.png)||
|![Arimo_700Bold](./700Bold/Arimo_700Bold.ttf.png)|![Arimo_400Regular_Italic](./400Regular_Italic/Arimo_400Regular_Italic.ttf.png)|![Arimo_500Medium_Italic](./500Medium_Italic/Arimo_500Medium_Italic.ttf.png)||
|![Arimo_600SemiBold_Italic](./600SemiBold_Italic/Arimo_600SemiBold_Italic.ttf.png)|![Arimo_700Bold_Italic](./700Bold_Italic/Arimo_700Bold_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/arimo` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Arimo page on Google Fonts](https://fonts.google.com/specimen/Arimo) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Arimo on Google Fonts](https://fonts.google.com/specimen/Arimo)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/arimo)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/arimo)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
