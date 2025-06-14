# @expo-google-fonts/hanken-grotesk

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/hanken-grotesk)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/hanken-grotesk)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/hanken-grotesk)

This package lets you use the [**Hanken Grotesk**](https://fonts.google.com/specimen/Hanken+Grotesk) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Hanken Grotesk

![Hanken Grotesk](./font-family.png)

This font family contains [18 styles](#-gallery).

- `HankenGrotesk_100Thin`
- `HankenGrotesk_200ExtraLight`
- `HankenGrotesk_300Light`
- `HankenGrotesk_400Regular`
- `HankenGrotesk_500Medium`
- `HankenGrotesk_600SemiBold`
- `HankenGrotesk_700Bold`
- `HankenGrotesk_800ExtraBold`
- `HankenGrotesk_900Black`
- `HankenGrotesk_100Thin_Italic`
- `HankenGrotesk_200ExtraLight_Italic`
- `HankenGrotesk_300Light_Italic`
- `HankenGrotesk_400Regular_Italic`
- `HankenGrotesk_500Medium_Italic`
- `HankenGrotesk_600SemiBold_Italic`
- `HankenGrotesk_700Bold_Italic`
- `HankenGrotesk_800ExtraBold_Italic`
- `HankenGrotesk_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/hanken-grotesk expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/hanken-grotesk/useFonts';
import { HankenGrotesk_100Thin } from '@expo-google-fonts/hanken-grotesk/100Thin';
import { HankenGrotesk_200ExtraLight } from '@expo-google-fonts/hanken-grotesk/200ExtraLight';
import { HankenGrotesk_300Light } from '@expo-google-fonts/hanken-grotesk/300Light';
import { HankenGrotesk_400Regular } from '@expo-google-fonts/hanken-grotesk/400Regular';
import { HankenGrotesk_500Medium } from '@expo-google-fonts/hanken-grotesk/500Medium';
import { HankenGrotesk_600SemiBold } from '@expo-google-fonts/hanken-grotesk/600SemiBold';
import { HankenGrotesk_700Bold } from '@expo-google-fonts/hanken-grotesk/700Bold';
import { HankenGrotesk_800ExtraBold } from '@expo-google-fonts/hanken-grotesk/800ExtraBold';
import { HankenGrotesk_900Black } from '@expo-google-fonts/hanken-grotesk/900Black';
import { HankenGrotesk_100Thin_Italic } from '@expo-google-fonts/hanken-grotesk/100Thin_Italic';
import { HankenGrotesk_200ExtraLight_Italic } from '@expo-google-fonts/hanken-grotesk/200ExtraLight_Italic';
import { HankenGrotesk_300Light_Italic } from '@expo-google-fonts/hanken-grotesk/300Light_Italic';
import { HankenGrotesk_400Regular_Italic } from '@expo-google-fonts/hanken-grotesk/400Regular_Italic';
import { HankenGrotesk_500Medium_Italic } from '@expo-google-fonts/hanken-grotesk/500Medium_Italic';
import { HankenGrotesk_600SemiBold_Italic } from '@expo-google-fonts/hanken-grotesk/600SemiBold_Italic';
import { HankenGrotesk_700Bold_Italic } from '@expo-google-fonts/hanken-grotesk/700Bold_Italic';
import { HankenGrotesk_800ExtraBold_Italic } from '@expo-google-fonts/hanken-grotesk/800ExtraBold_Italic';
import { HankenGrotesk_900Black_Italic } from '@expo-google-fonts/hanken-grotesk/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    HankenGrotesk_100Thin, 
    HankenGrotesk_200ExtraLight, 
    HankenGrotesk_300Light, 
    HankenGrotesk_400Regular, 
    HankenGrotesk_500Medium, 
    HankenGrotesk_600SemiBold, 
    HankenGrotesk_700Bold, 
    HankenGrotesk_800ExtraBold, 
    HankenGrotesk_900Black, 
    HankenGrotesk_100Thin_Italic, 
    HankenGrotesk_200ExtraLight_Italic, 
    HankenGrotesk_300Light_Italic, 
    HankenGrotesk_400Regular_Italic, 
    HankenGrotesk_500Medium_Italic, 
    HankenGrotesk_600SemiBold_Italic, 
    HankenGrotesk_700Bold_Italic, 
    HankenGrotesk_800ExtraBold_Italic, 
    HankenGrotesk_900Black_Italic
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
          fontFamily: "HankenGrotesk_100Thin"
        }}>
          Hanken Grotesk Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HankenGrotesk_200ExtraLight"
        }}>
          Hanken Grotesk Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HankenGrotesk_300Light"
        }}>
          Hanken Grotesk Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HankenGrotesk_400Regular"
        }}>
          Hanken Grotesk Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HankenGrotesk_500Medium"
        }}>
          Hanken Grotesk Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HankenGrotesk_600SemiBold"
        }}>
          Hanken Grotesk Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HankenGrotesk_700Bold"
        }}>
          Hanken Grotesk Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HankenGrotesk_800ExtraBold"
        }}>
          Hanken Grotesk Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HankenGrotesk_900Black"
        }}>
          Hanken Grotesk Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HankenGrotesk_100Thin_Italic"
        }}>
          Hanken Grotesk Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HankenGrotesk_200ExtraLight_Italic"
        }}>
          Hanken Grotesk Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HankenGrotesk_300Light_Italic"
        }}>
          Hanken Grotesk Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HankenGrotesk_400Regular_Italic"
        }}>
          Hanken Grotesk Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HankenGrotesk_500Medium_Italic"
        }}>
          Hanken Grotesk Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HankenGrotesk_600SemiBold_Italic"
        }}>
          Hanken Grotesk Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HankenGrotesk_700Bold_Italic"
        }}>
          Hanken Grotesk Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HankenGrotesk_800ExtraBold_Italic"
        }}>
          Hanken Grotesk Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HankenGrotesk_900Black_Italic"
        }}>
          Hanken Grotesk Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![HankenGrotesk_100Thin](./100Thin/HankenGrotesk_100Thin.ttf.png)|![HankenGrotesk_200ExtraLight](./200ExtraLight/HankenGrotesk_200ExtraLight.ttf.png)|![HankenGrotesk_300Light](./300Light/HankenGrotesk_300Light.ttf.png)||
|![HankenGrotesk_400Regular](./400Regular/HankenGrotesk_400Regular.ttf.png)|![HankenGrotesk_500Medium](./500Medium/HankenGrotesk_500Medium.ttf.png)|![HankenGrotesk_600SemiBold](./600SemiBold/HankenGrotesk_600SemiBold.ttf.png)||
|![HankenGrotesk_700Bold](./700Bold/HankenGrotesk_700Bold.ttf.png)|![HankenGrotesk_800ExtraBold](./800ExtraBold/HankenGrotesk_800ExtraBold.ttf.png)|![HankenGrotesk_900Black](./900Black/HankenGrotesk_900Black.ttf.png)||
|![HankenGrotesk_100Thin_Italic](./100Thin_Italic/HankenGrotesk_100Thin_Italic.ttf.png)|![HankenGrotesk_200ExtraLight_Italic](./200ExtraLight_Italic/HankenGrotesk_200ExtraLight_Italic.ttf.png)|![HankenGrotesk_300Light_Italic](./300Light_Italic/HankenGrotesk_300Light_Italic.ttf.png)||
|![HankenGrotesk_400Regular_Italic](./400Regular_Italic/HankenGrotesk_400Regular_Italic.ttf.png)|![HankenGrotesk_500Medium_Italic](./500Medium_Italic/HankenGrotesk_500Medium_Italic.ttf.png)|![HankenGrotesk_600SemiBold_Italic](./600SemiBold_Italic/HankenGrotesk_600SemiBold_Italic.ttf.png)||
|![HankenGrotesk_700Bold_Italic](./700Bold_Italic/HankenGrotesk_700Bold_Italic.ttf.png)|![HankenGrotesk_800ExtraBold_Italic](./800ExtraBold_Italic/HankenGrotesk_800ExtraBold_Italic.ttf.png)|![HankenGrotesk_900Black_Italic](./900Black_Italic/HankenGrotesk_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/hanken-grotesk` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Hanken Grotesk page on Google Fonts](https://fonts.google.com/specimen/Hanken+Grotesk) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Hanken Grotesk on Google Fonts](https://fonts.google.com/specimen/Hanken+Grotesk)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/hanken-grotesk)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/hanken-grotesk)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
