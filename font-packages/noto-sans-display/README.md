# @expo-google-fonts/noto-sans-display

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-sans-display)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-sans-display)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-sans-display)

This package lets you use the [**Noto Sans Display**](https://fonts.google.com/specimen/Noto+Sans+Display) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Sans Display

![Noto Sans Display](./font-family.png)

This font family contains [18 styles](#-gallery).

- `NotoSansDisplay_100Thin`
- `NotoSansDisplay_200ExtraLight`
- `NotoSansDisplay_300Light`
- `NotoSansDisplay_400Regular`
- `NotoSansDisplay_500Medium`
- `NotoSansDisplay_600SemiBold`
- `NotoSansDisplay_700Bold`
- `NotoSansDisplay_800ExtraBold`
- `NotoSansDisplay_900Black`
- `NotoSansDisplay_100Thin_Italic`
- `NotoSansDisplay_200ExtraLight_Italic`
- `NotoSansDisplay_300Light_Italic`
- `NotoSansDisplay_400Regular_Italic`
- `NotoSansDisplay_500Medium_Italic`
- `NotoSansDisplay_600SemiBold_Italic`
- `NotoSansDisplay_700Bold_Italic`
- `NotoSansDisplay_800ExtraBold_Italic`
- `NotoSansDisplay_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/noto-sans-display expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/noto-sans-display/useFonts';
import { NotoSansDisplay_100Thin } from '@expo-google-fonts/noto-sans-display/100Thin';
import { NotoSansDisplay_200ExtraLight } from '@expo-google-fonts/noto-sans-display/200ExtraLight';
import { NotoSansDisplay_300Light } from '@expo-google-fonts/noto-sans-display/300Light';
import { NotoSansDisplay_400Regular } from '@expo-google-fonts/noto-sans-display/400Regular';
import { NotoSansDisplay_500Medium } from '@expo-google-fonts/noto-sans-display/500Medium';
import { NotoSansDisplay_600SemiBold } from '@expo-google-fonts/noto-sans-display/600SemiBold';
import { NotoSansDisplay_700Bold } from '@expo-google-fonts/noto-sans-display/700Bold';
import { NotoSansDisplay_800ExtraBold } from '@expo-google-fonts/noto-sans-display/800ExtraBold';
import { NotoSansDisplay_900Black } from '@expo-google-fonts/noto-sans-display/900Black';
import { NotoSansDisplay_100Thin_Italic } from '@expo-google-fonts/noto-sans-display/100Thin_Italic';
import { NotoSansDisplay_200ExtraLight_Italic } from '@expo-google-fonts/noto-sans-display/200ExtraLight_Italic';
import { NotoSansDisplay_300Light_Italic } from '@expo-google-fonts/noto-sans-display/300Light_Italic';
import { NotoSansDisplay_400Regular_Italic } from '@expo-google-fonts/noto-sans-display/400Regular_Italic';
import { NotoSansDisplay_500Medium_Italic } from '@expo-google-fonts/noto-sans-display/500Medium_Italic';
import { NotoSansDisplay_600SemiBold_Italic } from '@expo-google-fonts/noto-sans-display/600SemiBold_Italic';
import { NotoSansDisplay_700Bold_Italic } from '@expo-google-fonts/noto-sans-display/700Bold_Italic';
import { NotoSansDisplay_800ExtraBold_Italic } from '@expo-google-fonts/noto-sans-display/800ExtraBold_Italic';
import { NotoSansDisplay_900Black_Italic } from '@expo-google-fonts/noto-sans-display/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    NotoSansDisplay_100Thin, 
    NotoSansDisplay_200ExtraLight, 
    NotoSansDisplay_300Light, 
    NotoSansDisplay_400Regular, 
    NotoSansDisplay_500Medium, 
    NotoSansDisplay_600SemiBold, 
    NotoSansDisplay_700Bold, 
    NotoSansDisplay_800ExtraBold, 
    NotoSansDisplay_900Black, 
    NotoSansDisplay_100Thin_Italic, 
    NotoSansDisplay_200ExtraLight_Italic, 
    NotoSansDisplay_300Light_Italic, 
    NotoSansDisplay_400Regular_Italic, 
    NotoSansDisplay_500Medium_Italic, 
    NotoSansDisplay_600SemiBold_Italic, 
    NotoSansDisplay_700Bold_Italic, 
    NotoSansDisplay_800ExtraBold_Italic, 
    NotoSansDisplay_900Black_Italic
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
          fontFamily: "NotoSansDisplay_100Thin"
        }}>
          Noto Sans Display Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansDisplay_200ExtraLight"
        }}>
          Noto Sans Display Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansDisplay_300Light"
        }}>
          Noto Sans Display Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansDisplay_400Regular"
        }}>
          Noto Sans Display Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansDisplay_500Medium"
        }}>
          Noto Sans Display Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansDisplay_600SemiBold"
        }}>
          Noto Sans Display Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansDisplay_700Bold"
        }}>
          Noto Sans Display Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansDisplay_800ExtraBold"
        }}>
          Noto Sans Display Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansDisplay_900Black"
        }}>
          Noto Sans Display Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansDisplay_100Thin_Italic"
        }}>
          Noto Sans Display Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansDisplay_200ExtraLight_Italic"
        }}>
          Noto Sans Display Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansDisplay_300Light_Italic"
        }}>
          Noto Sans Display Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansDisplay_400Regular_Italic"
        }}>
          Noto Sans Display Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansDisplay_500Medium_Italic"
        }}>
          Noto Sans Display Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansDisplay_600SemiBold_Italic"
        }}>
          Noto Sans Display Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansDisplay_700Bold_Italic"
        }}>
          Noto Sans Display Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansDisplay_800ExtraBold_Italic"
        }}>
          Noto Sans Display Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansDisplay_900Black_Italic"
        }}>
          Noto Sans Display Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSansDisplay_100Thin](./100Thin/NotoSansDisplay_100Thin.ttf.png)|![NotoSansDisplay_200ExtraLight](./200ExtraLight/NotoSansDisplay_200ExtraLight.ttf.png)|![NotoSansDisplay_300Light](./300Light/NotoSansDisplay_300Light.ttf.png)||
|![NotoSansDisplay_400Regular](./400Regular/NotoSansDisplay_400Regular.ttf.png)|![NotoSansDisplay_500Medium](./500Medium/NotoSansDisplay_500Medium.ttf.png)|![NotoSansDisplay_600SemiBold](./600SemiBold/NotoSansDisplay_600SemiBold.ttf.png)||
|![NotoSansDisplay_700Bold](./700Bold/NotoSansDisplay_700Bold.ttf.png)|![NotoSansDisplay_800ExtraBold](./800ExtraBold/NotoSansDisplay_800ExtraBold.ttf.png)|![NotoSansDisplay_900Black](./900Black/NotoSansDisplay_900Black.ttf.png)||
|![NotoSansDisplay_100Thin_Italic](./100Thin_Italic/NotoSansDisplay_100Thin_Italic.ttf.png)|![NotoSansDisplay_200ExtraLight_Italic](./200ExtraLight_Italic/NotoSansDisplay_200ExtraLight_Italic.ttf.png)|![NotoSansDisplay_300Light_Italic](./300Light_Italic/NotoSansDisplay_300Light_Italic.ttf.png)||
|![NotoSansDisplay_400Regular_Italic](./400Regular_Italic/NotoSansDisplay_400Regular_Italic.ttf.png)|![NotoSansDisplay_500Medium_Italic](./500Medium_Italic/NotoSansDisplay_500Medium_Italic.ttf.png)|![NotoSansDisplay_600SemiBold_Italic](./600SemiBold_Italic/NotoSansDisplay_600SemiBold_Italic.ttf.png)||
|![NotoSansDisplay_700Bold_Italic](./700Bold_Italic/NotoSansDisplay_700Bold_Italic.ttf.png)|![NotoSansDisplay_800ExtraBold_Italic](./800ExtraBold_Italic/NotoSansDisplay_800ExtraBold_Italic.ttf.png)|![NotoSansDisplay_900Black_Italic](./900Black_Italic/NotoSansDisplay_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/noto-sans-display` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Sans Display page on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Display) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Sans Display on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Display)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-sans-display)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-sans-display)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
