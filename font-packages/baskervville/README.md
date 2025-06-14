# @expo-google-fonts/baskervville

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/baskervville)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/baskervville)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/baskervville)

This package lets you use the [**Baskervville**](https://fonts.google.com/specimen/Baskervville) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Baskervville

![Baskervville](./font-family.png)

This font family contains [8 styles](#-gallery).

- `Baskervville_400Regular`
- `Baskervville_500Medium`
- `Baskervville_600SemiBold`
- `Baskervville_700Bold`
- `Baskervville_400Regular_Italic`
- `Baskervville_500Medium_Italic`
- `Baskervville_600SemiBold_Italic`
- `Baskervville_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/baskervville expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/baskervville/useFonts';
import { Baskervville_400Regular } from '@expo-google-fonts/baskervville/400Regular';
import { Baskervville_500Medium } from '@expo-google-fonts/baskervville/500Medium';
import { Baskervville_600SemiBold } from '@expo-google-fonts/baskervville/600SemiBold';
import { Baskervville_700Bold } from '@expo-google-fonts/baskervville/700Bold';
import { Baskervville_400Regular_Italic } from '@expo-google-fonts/baskervville/400Regular_Italic';
import { Baskervville_500Medium_Italic } from '@expo-google-fonts/baskervville/500Medium_Italic';
import { Baskervville_600SemiBold_Italic } from '@expo-google-fonts/baskervville/600SemiBold_Italic';
import { Baskervville_700Bold_Italic } from '@expo-google-fonts/baskervville/700Bold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Baskervville_400Regular, 
    Baskervville_500Medium, 
    Baskervville_600SemiBold, 
    Baskervville_700Bold, 
    Baskervville_400Regular_Italic, 
    Baskervville_500Medium_Italic, 
    Baskervville_600SemiBold_Italic, 
    Baskervville_700Bold_Italic
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
          fontFamily: "Baskervville_400Regular"
        }}>
          Baskervville Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Baskervville_500Medium"
        }}>
          Baskervville Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Baskervville_600SemiBold"
        }}>
          Baskervville Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Baskervville_700Bold"
        }}>
          Baskervville Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Baskervville_400Regular_Italic"
        }}>
          Baskervville Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Baskervville_500Medium_Italic"
        }}>
          Baskervville Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Baskervville_600SemiBold_Italic"
        }}>
          Baskervville Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Baskervville_700Bold_Italic"
        }}>
          Baskervville Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Baskervville_400Regular](./400Regular/Baskervville_400Regular.ttf.png)|![Baskervville_500Medium](./500Medium/Baskervville_500Medium.ttf.png)|![Baskervville_600SemiBold](./600SemiBold/Baskervville_600SemiBold.ttf.png)||
|![Baskervville_700Bold](./700Bold/Baskervville_700Bold.ttf.png)|![Baskervville_400Regular_Italic](./400Regular_Italic/Baskervville_400Regular_Italic.ttf.png)|![Baskervville_500Medium_Italic](./500Medium_Italic/Baskervville_500Medium_Italic.ttf.png)||
|![Baskervville_600SemiBold_Italic](./600SemiBold_Italic/Baskervville_600SemiBold_Italic.ttf.png)|![Baskervville_700Bold_Italic](./700Bold_Italic/Baskervville_700Bold_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/baskervville` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Baskervville page on Google Fonts](https://fonts.google.com/specimen/Baskervville) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Baskervville on Google Fonts](https://fonts.google.com/specimen/Baskervville)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/baskervville)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/baskervville)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
