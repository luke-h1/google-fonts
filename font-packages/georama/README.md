# @expo-google-fonts/georama

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/georama)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/georama)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/georama)

This package lets you use the [**Georama**](https://fonts.google.com/specimen/Georama) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Georama

![Georama](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Georama_100Thin`
- `Georama_200ExtraLight`
- `Georama_300Light`
- `Georama_400Regular`
- `Georama_500Medium`
- `Georama_600SemiBold`
- `Georama_700Bold`
- `Georama_800ExtraBold`
- `Georama_900Black`
- `Georama_100Thin_Italic`
- `Georama_200ExtraLight_Italic`
- `Georama_300Light_Italic`
- `Georama_400Regular_Italic`
- `Georama_500Medium_Italic`
- `Georama_600SemiBold_Italic`
- `Georama_700Bold_Italic`
- `Georama_800ExtraBold_Italic`
- `Georama_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/georama expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/georama/useFonts';
import { Georama_100Thin } from '@expo-google-fonts/georama/100Thin';
import { Georama_200ExtraLight } from '@expo-google-fonts/georama/200ExtraLight';
import { Georama_300Light } from '@expo-google-fonts/georama/300Light';
import { Georama_400Regular } from '@expo-google-fonts/georama/400Regular';
import { Georama_500Medium } from '@expo-google-fonts/georama/500Medium';
import { Georama_600SemiBold } from '@expo-google-fonts/georama/600SemiBold';
import { Georama_700Bold } from '@expo-google-fonts/georama/700Bold';
import { Georama_800ExtraBold } from '@expo-google-fonts/georama/800ExtraBold';
import { Georama_900Black } from '@expo-google-fonts/georama/900Black';
import { Georama_100Thin_Italic } from '@expo-google-fonts/georama/100Thin_Italic';
import { Georama_200ExtraLight_Italic } from '@expo-google-fonts/georama/200ExtraLight_Italic';
import { Georama_300Light_Italic } from '@expo-google-fonts/georama/300Light_Italic';
import { Georama_400Regular_Italic } from '@expo-google-fonts/georama/400Regular_Italic';
import { Georama_500Medium_Italic } from '@expo-google-fonts/georama/500Medium_Italic';
import { Georama_600SemiBold_Italic } from '@expo-google-fonts/georama/600SemiBold_Italic';
import { Georama_700Bold_Italic } from '@expo-google-fonts/georama/700Bold_Italic';
import { Georama_800ExtraBold_Italic } from '@expo-google-fonts/georama/800ExtraBold_Italic';
import { Georama_900Black_Italic } from '@expo-google-fonts/georama/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Georama_100Thin, 
    Georama_200ExtraLight, 
    Georama_300Light, 
    Georama_400Regular, 
    Georama_500Medium, 
    Georama_600SemiBold, 
    Georama_700Bold, 
    Georama_800ExtraBold, 
    Georama_900Black, 
    Georama_100Thin_Italic, 
    Georama_200ExtraLight_Italic, 
    Georama_300Light_Italic, 
    Georama_400Regular_Italic, 
    Georama_500Medium_Italic, 
    Georama_600SemiBold_Italic, 
    Georama_700Bold_Italic, 
    Georama_800ExtraBold_Italic, 
    Georama_900Black_Italic
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
          fontFamily: "Georama_100Thin"
        }}>
          Georama Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Georama_200ExtraLight"
        }}>
          Georama Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Georama_300Light"
        }}>
          Georama Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Georama_400Regular"
        }}>
          Georama Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Georama_500Medium"
        }}>
          Georama Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Georama_600SemiBold"
        }}>
          Georama Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Georama_700Bold"
        }}>
          Georama Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Georama_800ExtraBold"
        }}>
          Georama Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Georama_900Black"
        }}>
          Georama Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Georama_100Thin_Italic"
        }}>
          Georama Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Georama_200ExtraLight_Italic"
        }}>
          Georama Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Georama_300Light_Italic"
        }}>
          Georama Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Georama_400Regular_Italic"
        }}>
          Georama Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Georama_500Medium_Italic"
        }}>
          Georama Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Georama_600SemiBold_Italic"
        }}>
          Georama Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Georama_700Bold_Italic"
        }}>
          Georama Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Georama_800ExtraBold_Italic"
        }}>
          Georama Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Georama_900Black_Italic"
        }}>
          Georama Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Georama_100Thin](./100Thin/Georama_100Thin.ttf.png)|![Georama_200ExtraLight](./200ExtraLight/Georama_200ExtraLight.ttf.png)|![Georama_300Light](./300Light/Georama_300Light.ttf.png)||
|![Georama_400Regular](./400Regular/Georama_400Regular.ttf.png)|![Georama_500Medium](./500Medium/Georama_500Medium.ttf.png)|![Georama_600SemiBold](./600SemiBold/Georama_600SemiBold.ttf.png)||
|![Georama_700Bold](./700Bold/Georama_700Bold.ttf.png)|![Georama_800ExtraBold](./800ExtraBold/Georama_800ExtraBold.ttf.png)|![Georama_900Black](./900Black/Georama_900Black.ttf.png)||
|![Georama_100Thin_Italic](./100Thin_Italic/Georama_100Thin_Italic.ttf.png)|![Georama_200ExtraLight_Italic](./200ExtraLight_Italic/Georama_200ExtraLight_Italic.ttf.png)|![Georama_300Light_Italic](./300Light_Italic/Georama_300Light_Italic.ttf.png)||
|![Georama_400Regular_Italic](./400Regular_Italic/Georama_400Regular_Italic.ttf.png)|![Georama_500Medium_Italic](./500Medium_Italic/Georama_500Medium_Italic.ttf.png)|![Georama_600SemiBold_Italic](./600SemiBold_Italic/Georama_600SemiBold_Italic.ttf.png)||
|![Georama_700Bold_Italic](./700Bold_Italic/Georama_700Bold_Italic.ttf.png)|![Georama_800ExtraBold_Italic](./800ExtraBold_Italic/Georama_800ExtraBold_Italic.ttf.png)|![Georama_900Black_Italic](./900Black_Italic/Georama_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/georama` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Georama page on Google Fonts](https://fonts.google.com/specimen/Georama) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Georama on Google Fonts](https://fonts.google.com/specimen/Georama)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/georama)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/georama)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
