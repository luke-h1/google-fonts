# @expo-google-fonts/livvic

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/livvic)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/livvic)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/livvic)

This package lets you use the [**Livvic**](https://fonts.google.com/specimen/Livvic) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Livvic

![Livvic](./font-family.png)

This font family contains [16 styles](#-gallery).

- `Livvic_100Thin`
- `Livvic_100Thin_Italic`
- `Livvic_200ExtraLight`
- `Livvic_200ExtraLight_Italic`
- `Livvic_300Light`
- `Livvic_300Light_Italic`
- `Livvic_400Regular`
- `Livvic_400Regular_Italic`
- `Livvic_500Medium`
- `Livvic_500Medium_Italic`
- `Livvic_600SemiBold`
- `Livvic_600SemiBold_Italic`
- `Livvic_700Bold`
- `Livvic_700Bold_Italic`
- `Livvic_900Black`
- `Livvic_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/livvic expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/livvic/useFonts';
import { Livvic_100Thin } from '@expo-google-fonts/livvic/100Thin';
import { Livvic_100Thin_Italic } from '@expo-google-fonts/livvic/100Thin_Italic';
import { Livvic_200ExtraLight } from '@expo-google-fonts/livvic/200ExtraLight';
import { Livvic_200ExtraLight_Italic } from '@expo-google-fonts/livvic/200ExtraLight_Italic';
import { Livvic_300Light } from '@expo-google-fonts/livvic/300Light';
import { Livvic_300Light_Italic } from '@expo-google-fonts/livvic/300Light_Italic';
import { Livvic_400Regular } from '@expo-google-fonts/livvic/400Regular';
import { Livvic_400Regular_Italic } from '@expo-google-fonts/livvic/400Regular_Italic';
import { Livvic_500Medium } from '@expo-google-fonts/livvic/500Medium';
import { Livvic_500Medium_Italic } from '@expo-google-fonts/livvic/500Medium_Italic';
import { Livvic_600SemiBold } from '@expo-google-fonts/livvic/600SemiBold';
import { Livvic_600SemiBold_Italic } from '@expo-google-fonts/livvic/600SemiBold_Italic';
import { Livvic_700Bold } from '@expo-google-fonts/livvic/700Bold';
import { Livvic_700Bold_Italic } from '@expo-google-fonts/livvic/700Bold_Italic';
import { Livvic_900Black } from '@expo-google-fonts/livvic/900Black';
import { Livvic_900Black_Italic } from '@expo-google-fonts/livvic/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Livvic_100Thin, 
    Livvic_100Thin_Italic, 
    Livvic_200ExtraLight, 
    Livvic_200ExtraLight_Italic, 
    Livvic_300Light, 
    Livvic_300Light_Italic, 
    Livvic_400Regular, 
    Livvic_400Regular_Italic, 
    Livvic_500Medium, 
    Livvic_500Medium_Italic, 
    Livvic_600SemiBold, 
    Livvic_600SemiBold_Italic, 
    Livvic_700Bold, 
    Livvic_700Bold_Italic, 
    Livvic_900Black, 
    Livvic_900Black_Italic
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
          fontFamily: "Livvic_100Thin"
        }}>
          Livvic Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Livvic_100Thin_Italic"
        }}>
          Livvic Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Livvic_200ExtraLight"
        }}>
          Livvic Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Livvic_200ExtraLight_Italic"
        }}>
          Livvic Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Livvic_300Light"
        }}>
          Livvic Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Livvic_300Light_Italic"
        }}>
          Livvic Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Livvic_400Regular"
        }}>
          Livvic Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Livvic_400Regular_Italic"
        }}>
          Livvic Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Livvic_500Medium"
        }}>
          Livvic Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Livvic_500Medium_Italic"
        }}>
          Livvic Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Livvic_600SemiBold"
        }}>
          Livvic Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Livvic_600SemiBold_Italic"
        }}>
          Livvic Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Livvic_700Bold"
        }}>
          Livvic Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Livvic_700Bold_Italic"
        }}>
          Livvic Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Livvic_900Black"
        }}>
          Livvic Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Livvic_900Black_Italic"
        }}>
          Livvic Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Livvic_100Thin](./100Thin/Livvic_100Thin.ttf.png)|![Livvic_100Thin_Italic](./100Thin_Italic/Livvic_100Thin_Italic.ttf.png)|![Livvic_200ExtraLight](./200ExtraLight/Livvic_200ExtraLight.ttf.png)||
|![Livvic_200ExtraLight_Italic](./200ExtraLight_Italic/Livvic_200ExtraLight_Italic.ttf.png)|![Livvic_300Light](./300Light/Livvic_300Light.ttf.png)|![Livvic_300Light_Italic](./300Light_Italic/Livvic_300Light_Italic.ttf.png)||
|![Livvic_400Regular](./400Regular/Livvic_400Regular.ttf.png)|![Livvic_400Regular_Italic](./400Regular_Italic/Livvic_400Regular_Italic.ttf.png)|![Livvic_500Medium](./500Medium/Livvic_500Medium.ttf.png)||
|![Livvic_500Medium_Italic](./500Medium_Italic/Livvic_500Medium_Italic.ttf.png)|![Livvic_600SemiBold](./600SemiBold/Livvic_600SemiBold.ttf.png)|![Livvic_600SemiBold_Italic](./600SemiBold_Italic/Livvic_600SemiBold_Italic.ttf.png)||
|![Livvic_700Bold](./700Bold/Livvic_700Bold.ttf.png)|![Livvic_700Bold_Italic](./700Bold_Italic/Livvic_700Bold_Italic.ttf.png)|![Livvic_900Black](./900Black/Livvic_900Black.ttf.png)||
|![Livvic_900Black_Italic](./900Black_Italic/Livvic_900Black_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/livvic` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Livvic page on Google Fonts](https://fonts.google.com/specimen/Livvic) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Livvic on Google Fonts](https://fonts.google.com/specimen/Livvic)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/livvic)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/livvic)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
