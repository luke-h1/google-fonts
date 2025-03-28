# @expo-google-fonts/bodoni-moda

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/bodoni-moda)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/bodoni-moda)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/bodoni-moda)

This package lets you use the [**Bodoni Moda**](https://fonts.google.com/specimen/Bodoni+Moda) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Bodoni Moda

![Bodoni Moda](./font-family.png)

This font family contains [12 styles](#-gallery).

- `BodoniModa_400Regular`
- `BodoniModa_500Medium`
- `BodoniModa_600SemiBold`
- `BodoniModa_700Bold`
- `BodoniModa_800ExtraBold`
- `BodoniModa_900Black`
- `BodoniModa_400Regular_Italic`
- `BodoniModa_500Medium_Italic`
- `BodoniModa_600SemiBold_Italic`
- `BodoniModa_700Bold_Italic`
- `BodoniModa_800ExtraBold_Italic`
- `BodoniModa_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/bodoni-moda expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/bodoni-moda/useFonts';
import { BodoniModa_400Regular } from '@expo-google-fonts/bodoni-moda/400Regular';
import { BodoniModa_500Medium } from '@expo-google-fonts/bodoni-moda/500Medium';
import { BodoniModa_600SemiBold } from '@expo-google-fonts/bodoni-moda/600SemiBold';
import { BodoniModa_700Bold } from '@expo-google-fonts/bodoni-moda/700Bold';
import { BodoniModa_800ExtraBold } from '@expo-google-fonts/bodoni-moda/800ExtraBold';
import { BodoniModa_900Black } from '@expo-google-fonts/bodoni-moda/900Black';
import { BodoniModa_400Regular_Italic } from '@expo-google-fonts/bodoni-moda/400Regular_Italic';
import { BodoniModa_500Medium_Italic } from '@expo-google-fonts/bodoni-moda/500Medium_Italic';
import { BodoniModa_600SemiBold_Italic } from '@expo-google-fonts/bodoni-moda/600SemiBold_Italic';
import { BodoniModa_700Bold_Italic } from '@expo-google-fonts/bodoni-moda/700Bold_Italic';
import { BodoniModa_800ExtraBold_Italic } from '@expo-google-fonts/bodoni-moda/800ExtraBold_Italic';
import { BodoniModa_900Black_Italic } from '@expo-google-fonts/bodoni-moda/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    BodoniModa_400Regular, 
    BodoniModa_500Medium, 
    BodoniModa_600SemiBold, 
    BodoniModa_700Bold, 
    BodoniModa_800ExtraBold, 
    BodoniModa_900Black, 
    BodoniModa_400Regular_Italic, 
    BodoniModa_500Medium_Italic, 
    BodoniModa_600SemiBold_Italic, 
    BodoniModa_700Bold_Italic, 
    BodoniModa_800ExtraBold_Italic, 
    BodoniModa_900Black_Italic
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
          fontFamily: "BodoniModa_400Regular"
        }}>
          Bodoni Moda Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BodoniModa_500Medium"
        }}>
          Bodoni Moda Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BodoniModa_600SemiBold"
        }}>
          Bodoni Moda Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BodoniModa_700Bold"
        }}>
          Bodoni Moda Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BodoniModa_800ExtraBold"
        }}>
          Bodoni Moda Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BodoniModa_900Black"
        }}>
          Bodoni Moda Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BodoniModa_400Regular_Italic"
        }}>
          Bodoni Moda Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BodoniModa_500Medium_Italic"
        }}>
          Bodoni Moda Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BodoniModa_600SemiBold_Italic"
        }}>
          Bodoni Moda Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BodoniModa_700Bold_Italic"
        }}>
          Bodoni Moda Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BodoniModa_800ExtraBold_Italic"
        }}>
          Bodoni Moda Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BodoniModa_900Black_Italic"
        }}>
          Bodoni Moda Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![BodoniModa_400Regular](./400Regular/BodoniModa_400Regular.ttf.png)|![BodoniModa_500Medium](./500Medium/BodoniModa_500Medium.ttf.png)|![BodoniModa_600SemiBold](./600SemiBold/BodoniModa_600SemiBold.ttf.png)||
|![BodoniModa_700Bold](./700Bold/BodoniModa_700Bold.ttf.png)|![BodoniModa_800ExtraBold](./800ExtraBold/BodoniModa_800ExtraBold.ttf.png)|![BodoniModa_900Black](./900Black/BodoniModa_900Black.ttf.png)||
|![BodoniModa_400Regular_Italic](./400Regular_Italic/BodoniModa_400Regular_Italic.ttf.png)|![BodoniModa_500Medium_Italic](./500Medium_Italic/BodoniModa_500Medium_Italic.ttf.png)|![BodoniModa_600SemiBold_Italic](./600SemiBold_Italic/BodoniModa_600SemiBold_Italic.ttf.png)||
|![BodoniModa_700Bold_Italic](./700Bold_Italic/BodoniModa_700Bold_Italic.ttf.png)|![BodoniModa_800ExtraBold_Italic](./800ExtraBold_Italic/BodoniModa_800ExtraBold_Italic.ttf.png)|![BodoniModa_900Black_Italic](./900Black_Italic/BodoniModa_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/bodoni-moda` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Bodoni Moda page on Google Fonts](https://fonts.google.com/specimen/Bodoni+Moda) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Bodoni Moda on Google Fonts](https://fonts.google.com/specimen/Bodoni+Moda)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/bodoni-moda)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/bodoni-moda)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
