# @expo-google-fonts/instrument-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/instrument-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/instrument-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/instrument-sans)

This package lets you use the [**Instrument Sans**](https://fonts.google.com/specimen/Instrument+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Instrument Sans

![Instrument Sans](./font-family.png)

This font family contains [8 styles](#-gallery).

- `InstrumentSans_400Regular`
- `InstrumentSans_500Medium`
- `InstrumentSans_600SemiBold`
- `InstrumentSans_700Bold`
- `InstrumentSans_400Regular_Italic`
- `InstrumentSans_500Medium_Italic`
- `InstrumentSans_600SemiBold_Italic`
- `InstrumentSans_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/instrument-sans expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/instrument-sans/useFonts';
import { InstrumentSans_400Regular } from '@expo-google-fonts/instrument-sans/400Regular';
import { InstrumentSans_500Medium } from '@expo-google-fonts/instrument-sans/500Medium';
import { InstrumentSans_600SemiBold } from '@expo-google-fonts/instrument-sans/600SemiBold';
import { InstrumentSans_700Bold } from '@expo-google-fonts/instrument-sans/700Bold';
import { InstrumentSans_400Regular_Italic } from '@expo-google-fonts/instrument-sans/400Regular_Italic';
import { InstrumentSans_500Medium_Italic } from '@expo-google-fonts/instrument-sans/500Medium_Italic';
import { InstrumentSans_600SemiBold_Italic } from '@expo-google-fonts/instrument-sans/600SemiBold_Italic';
import { InstrumentSans_700Bold_Italic } from '@expo-google-fonts/instrument-sans/700Bold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    InstrumentSans_400Regular, 
    InstrumentSans_500Medium, 
    InstrumentSans_600SemiBold, 
    InstrumentSans_700Bold, 
    InstrumentSans_400Regular_Italic, 
    InstrumentSans_500Medium_Italic, 
    InstrumentSans_600SemiBold_Italic, 
    InstrumentSans_700Bold_Italic
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
          fontFamily: "InstrumentSans_400Regular"
        }}>
          Instrument Sans Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "InstrumentSans_500Medium"
        }}>
          Instrument Sans Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "InstrumentSans_600SemiBold"
        }}>
          Instrument Sans Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "InstrumentSans_700Bold"
        }}>
          Instrument Sans Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "InstrumentSans_400Regular_Italic"
        }}>
          Instrument Sans Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "InstrumentSans_500Medium_Italic"
        }}>
          Instrument Sans Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "InstrumentSans_600SemiBold_Italic"
        }}>
          Instrument Sans Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "InstrumentSans_700Bold_Italic"
        }}>
          Instrument Sans Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![InstrumentSans_400Regular](./400Regular/InstrumentSans_400Regular.ttf.png)|![InstrumentSans_500Medium](./500Medium/InstrumentSans_500Medium.ttf.png)|![InstrumentSans_600SemiBold](./600SemiBold/InstrumentSans_600SemiBold.ttf.png)||
|![InstrumentSans_700Bold](./700Bold/InstrumentSans_700Bold.ttf.png)|![InstrumentSans_400Regular_Italic](./400Regular_Italic/InstrumentSans_400Regular_Italic.ttf.png)|![InstrumentSans_500Medium_Italic](./500Medium_Italic/InstrumentSans_500Medium_Italic.ttf.png)||
|![InstrumentSans_600SemiBold_Italic](./600SemiBold_Italic/InstrumentSans_600SemiBold_Italic.ttf.png)|![InstrumentSans_700Bold_Italic](./700Bold_Italic/InstrumentSans_700Bold_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/instrument-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Instrument Sans page on Google Fonts](https://fonts.google.com/specimen/Instrument+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Instrument Sans on Google Fonts](https://fonts.google.com/specimen/Instrument+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/instrument-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/instrument-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
