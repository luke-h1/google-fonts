# @expo-google-fonts/libre-bodoni

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/libre-bodoni)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/libre-bodoni)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/libre-bodoni)

This package lets you use the [**Libre Bodoni**](https://fonts.google.com/specimen/Libre+Bodoni) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Libre Bodoni

![Libre Bodoni](./font-family.png)

This font family contains [8 styles](#-gallery).

- `LibreBodoni_400Regular`
- `LibreBodoni_500Medium`
- `LibreBodoni_600SemiBold`
- `LibreBodoni_700Bold`
- `LibreBodoni_400Regular_Italic`
- `LibreBodoni_500Medium_Italic`
- `LibreBodoni_600SemiBold_Italic`
- `LibreBodoni_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/libre-bodoni expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/libre-bodoni/useFonts';
import { LibreBodoni_400Regular } from '@expo-google-fonts/libre-bodoni/400Regular';
import { LibreBodoni_500Medium } from '@expo-google-fonts/libre-bodoni/500Medium';
import { LibreBodoni_600SemiBold } from '@expo-google-fonts/libre-bodoni/600SemiBold';
import { LibreBodoni_700Bold } from '@expo-google-fonts/libre-bodoni/700Bold';
import { LibreBodoni_400Regular_Italic } from '@expo-google-fonts/libre-bodoni/400Regular_Italic';
import { LibreBodoni_500Medium_Italic } from '@expo-google-fonts/libre-bodoni/500Medium_Italic';
import { LibreBodoni_600SemiBold_Italic } from '@expo-google-fonts/libre-bodoni/600SemiBold_Italic';
import { LibreBodoni_700Bold_Italic } from '@expo-google-fonts/libre-bodoni/700Bold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    LibreBodoni_400Regular, 
    LibreBodoni_500Medium, 
    LibreBodoni_600SemiBold, 
    LibreBodoni_700Bold, 
    LibreBodoni_400Regular_Italic, 
    LibreBodoni_500Medium_Italic, 
    LibreBodoni_600SemiBold_Italic, 
    LibreBodoni_700Bold_Italic
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
          fontFamily: "LibreBodoni_400Regular"
        }}>
          Libre Bodoni Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LibreBodoni_500Medium"
        }}>
          Libre Bodoni Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LibreBodoni_600SemiBold"
        }}>
          Libre Bodoni Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LibreBodoni_700Bold"
        }}>
          Libre Bodoni Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LibreBodoni_400Regular_Italic"
        }}>
          Libre Bodoni Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LibreBodoni_500Medium_Italic"
        }}>
          Libre Bodoni Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LibreBodoni_600SemiBold_Italic"
        }}>
          Libre Bodoni Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "LibreBodoni_700Bold_Italic"
        }}>
          Libre Bodoni Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![LibreBodoni_400Regular](./400Regular/LibreBodoni_400Regular.ttf.png)|![LibreBodoni_500Medium](./500Medium/LibreBodoni_500Medium.ttf.png)|![LibreBodoni_600SemiBold](./600SemiBold/LibreBodoni_600SemiBold.ttf.png)||
|![LibreBodoni_700Bold](./700Bold/LibreBodoni_700Bold.ttf.png)|![LibreBodoni_400Regular_Italic](./400Regular_Italic/LibreBodoni_400Regular_Italic.ttf.png)|![LibreBodoni_500Medium_Italic](./500Medium_Italic/LibreBodoni_500Medium_Italic.ttf.png)||
|![LibreBodoni_600SemiBold_Italic](./600SemiBold_Italic/LibreBodoni_600SemiBold_Italic.ttf.png)|![LibreBodoni_700Bold_Italic](./700Bold_Italic/LibreBodoni_700Bold_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/libre-bodoni` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Libre Bodoni page on Google Fonts](https://fonts.google.com/specimen/Libre+Bodoni) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Libre Bodoni on Google Fonts](https://fonts.google.com/specimen/Libre+Bodoni)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/libre-bodoni)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/libre-bodoni)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
