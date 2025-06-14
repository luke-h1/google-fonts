# @expo-google-fonts/fira-sans-condensed

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/fira-sans-condensed)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/fira-sans-condensed)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/fira-sans-condensed)

This package lets you use the [**Fira Sans Condensed**](https://fonts.google.com/specimen/Fira+Sans+Condensed) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Fira Sans Condensed

![Fira Sans Condensed](./font-family.png)

This font family contains [18 styles](#-gallery).

- `FiraSansCondensed_100Thin`
- `FiraSansCondensed_100Thin_Italic`
- `FiraSansCondensed_200ExtraLight`
- `FiraSansCondensed_200ExtraLight_Italic`
- `FiraSansCondensed_300Light`
- `FiraSansCondensed_300Light_Italic`
- `FiraSansCondensed_400Regular`
- `FiraSansCondensed_400Regular_Italic`
- `FiraSansCondensed_500Medium`
- `FiraSansCondensed_500Medium_Italic`
- `FiraSansCondensed_600SemiBold`
- `FiraSansCondensed_600SemiBold_Italic`
- `FiraSansCondensed_700Bold`
- `FiraSansCondensed_700Bold_Italic`
- `FiraSansCondensed_800ExtraBold`
- `FiraSansCondensed_800ExtraBold_Italic`
- `FiraSansCondensed_900Black`
- `FiraSansCondensed_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/fira-sans-condensed expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/fira-sans-condensed/useFonts';
import { FiraSansCondensed_100Thin } from '@expo-google-fonts/fira-sans-condensed/100Thin';
import { FiraSansCondensed_100Thin_Italic } from '@expo-google-fonts/fira-sans-condensed/100Thin_Italic';
import { FiraSansCondensed_200ExtraLight } from '@expo-google-fonts/fira-sans-condensed/200ExtraLight';
import { FiraSansCondensed_200ExtraLight_Italic } from '@expo-google-fonts/fira-sans-condensed/200ExtraLight_Italic';
import { FiraSansCondensed_300Light } from '@expo-google-fonts/fira-sans-condensed/300Light';
import { FiraSansCondensed_300Light_Italic } from '@expo-google-fonts/fira-sans-condensed/300Light_Italic';
import { FiraSansCondensed_400Regular } from '@expo-google-fonts/fira-sans-condensed/400Regular';
import { FiraSansCondensed_400Regular_Italic } from '@expo-google-fonts/fira-sans-condensed/400Regular_Italic';
import { FiraSansCondensed_500Medium } from '@expo-google-fonts/fira-sans-condensed/500Medium';
import { FiraSansCondensed_500Medium_Italic } from '@expo-google-fonts/fira-sans-condensed/500Medium_Italic';
import { FiraSansCondensed_600SemiBold } from '@expo-google-fonts/fira-sans-condensed/600SemiBold';
import { FiraSansCondensed_600SemiBold_Italic } from '@expo-google-fonts/fira-sans-condensed/600SemiBold_Italic';
import { FiraSansCondensed_700Bold } from '@expo-google-fonts/fira-sans-condensed/700Bold';
import { FiraSansCondensed_700Bold_Italic } from '@expo-google-fonts/fira-sans-condensed/700Bold_Italic';
import { FiraSansCondensed_800ExtraBold } from '@expo-google-fonts/fira-sans-condensed/800ExtraBold';
import { FiraSansCondensed_800ExtraBold_Italic } from '@expo-google-fonts/fira-sans-condensed/800ExtraBold_Italic';
import { FiraSansCondensed_900Black } from '@expo-google-fonts/fira-sans-condensed/900Black';
import { FiraSansCondensed_900Black_Italic } from '@expo-google-fonts/fira-sans-condensed/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    FiraSansCondensed_100Thin, 
    FiraSansCondensed_100Thin_Italic, 
    FiraSansCondensed_200ExtraLight, 
    FiraSansCondensed_200ExtraLight_Italic, 
    FiraSansCondensed_300Light, 
    FiraSansCondensed_300Light_Italic, 
    FiraSansCondensed_400Regular, 
    FiraSansCondensed_400Regular_Italic, 
    FiraSansCondensed_500Medium, 
    FiraSansCondensed_500Medium_Italic, 
    FiraSansCondensed_600SemiBold, 
    FiraSansCondensed_600SemiBold_Italic, 
    FiraSansCondensed_700Bold, 
    FiraSansCondensed_700Bold_Italic, 
    FiraSansCondensed_800ExtraBold, 
    FiraSansCondensed_800ExtraBold_Italic, 
    FiraSansCondensed_900Black, 
    FiraSansCondensed_900Black_Italic
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
          fontFamily: "FiraSansCondensed_100Thin"
        }}>
          Fira Sans Condensed Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FiraSansCondensed_100Thin_Italic"
        }}>
          Fira Sans Condensed Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FiraSansCondensed_200ExtraLight"
        }}>
          Fira Sans Condensed Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FiraSansCondensed_200ExtraLight_Italic"
        }}>
          Fira Sans Condensed Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FiraSansCondensed_300Light"
        }}>
          Fira Sans Condensed Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FiraSansCondensed_300Light_Italic"
        }}>
          Fira Sans Condensed Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FiraSansCondensed_400Regular"
        }}>
          Fira Sans Condensed Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FiraSansCondensed_400Regular_Italic"
        }}>
          Fira Sans Condensed Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FiraSansCondensed_500Medium"
        }}>
          Fira Sans Condensed Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FiraSansCondensed_500Medium_Italic"
        }}>
          Fira Sans Condensed Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FiraSansCondensed_600SemiBold"
        }}>
          Fira Sans Condensed Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FiraSansCondensed_600SemiBold_Italic"
        }}>
          Fira Sans Condensed Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FiraSansCondensed_700Bold"
        }}>
          Fira Sans Condensed Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FiraSansCondensed_700Bold_Italic"
        }}>
          Fira Sans Condensed Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FiraSansCondensed_800ExtraBold"
        }}>
          Fira Sans Condensed Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FiraSansCondensed_800ExtraBold_Italic"
        }}>
          Fira Sans Condensed Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FiraSansCondensed_900Black"
        }}>
          Fira Sans Condensed Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "FiraSansCondensed_900Black_Italic"
        }}>
          Fira Sans Condensed Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![FiraSansCondensed_100Thin](./100Thin/FiraSansCondensed_100Thin.ttf.png)|![FiraSansCondensed_100Thin_Italic](./100Thin_Italic/FiraSansCondensed_100Thin_Italic.ttf.png)|![FiraSansCondensed_200ExtraLight](./200ExtraLight/FiraSansCondensed_200ExtraLight.ttf.png)||
|![FiraSansCondensed_200ExtraLight_Italic](./200ExtraLight_Italic/FiraSansCondensed_200ExtraLight_Italic.ttf.png)|![FiraSansCondensed_300Light](./300Light/FiraSansCondensed_300Light.ttf.png)|![FiraSansCondensed_300Light_Italic](./300Light_Italic/FiraSansCondensed_300Light_Italic.ttf.png)||
|![FiraSansCondensed_400Regular](./400Regular/FiraSansCondensed_400Regular.ttf.png)|![FiraSansCondensed_400Regular_Italic](./400Regular_Italic/FiraSansCondensed_400Regular_Italic.ttf.png)|![FiraSansCondensed_500Medium](./500Medium/FiraSansCondensed_500Medium.ttf.png)||
|![FiraSansCondensed_500Medium_Italic](./500Medium_Italic/FiraSansCondensed_500Medium_Italic.ttf.png)|![FiraSansCondensed_600SemiBold](./600SemiBold/FiraSansCondensed_600SemiBold.ttf.png)|![FiraSansCondensed_600SemiBold_Italic](./600SemiBold_Italic/FiraSansCondensed_600SemiBold_Italic.ttf.png)||
|![FiraSansCondensed_700Bold](./700Bold/FiraSansCondensed_700Bold.ttf.png)|![FiraSansCondensed_700Bold_Italic](./700Bold_Italic/FiraSansCondensed_700Bold_Italic.ttf.png)|![FiraSansCondensed_800ExtraBold](./800ExtraBold/FiraSansCondensed_800ExtraBold.ttf.png)||
|![FiraSansCondensed_800ExtraBold_Italic](./800ExtraBold_Italic/FiraSansCondensed_800ExtraBold_Italic.ttf.png)|![FiraSansCondensed_900Black](./900Black/FiraSansCondensed_900Black.ttf.png)|![FiraSansCondensed_900Black_Italic](./900Black_Italic/FiraSansCondensed_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/fira-sans-condensed` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Fira Sans Condensed page on Google Fonts](https://fonts.google.com/specimen/Fira+Sans+Condensed) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Fira Sans Condensed on Google Fonts](https://fonts.google.com/specimen/Fira+Sans+Condensed)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/fira-sans-condensed)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/fira-sans-condensed)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
