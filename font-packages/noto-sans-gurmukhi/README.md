# @expo-google-fonts/noto-sans-gurmukhi

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-sans-gurmukhi)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-sans-gurmukhi)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-sans-gurmukhi)

This package lets you use the [**Noto Sans Gurmukhi**](https://fonts.google.com/specimen/Noto+Sans+Gurmukhi) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Sans Gurmukhi

![Noto Sans Gurmukhi](./font-family.png)

This font family contains [9 styles](#-gallery).

- `NotoSansGurmukhi_100Thin`
- `NotoSansGurmukhi_200ExtraLight`
- `NotoSansGurmukhi_300Light`
- `NotoSansGurmukhi_400Regular`
- `NotoSansGurmukhi_500Medium`
- `NotoSansGurmukhi_600SemiBold`
- `NotoSansGurmukhi_700Bold`
- `NotoSansGurmukhi_800ExtraBold`
- `NotoSansGurmukhi_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/noto-sans-gurmukhi expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/noto-sans-gurmukhi/useFonts';
import { NotoSansGurmukhi_100Thin } from '@expo-google-fonts/noto-sans-gurmukhi/100Thin';
import { NotoSansGurmukhi_200ExtraLight } from '@expo-google-fonts/noto-sans-gurmukhi/200ExtraLight';
import { NotoSansGurmukhi_300Light } from '@expo-google-fonts/noto-sans-gurmukhi/300Light';
import { NotoSansGurmukhi_400Regular } from '@expo-google-fonts/noto-sans-gurmukhi/400Regular';
import { NotoSansGurmukhi_500Medium } from '@expo-google-fonts/noto-sans-gurmukhi/500Medium';
import { NotoSansGurmukhi_600SemiBold } from '@expo-google-fonts/noto-sans-gurmukhi/600SemiBold';
import { NotoSansGurmukhi_700Bold } from '@expo-google-fonts/noto-sans-gurmukhi/700Bold';
import { NotoSansGurmukhi_800ExtraBold } from '@expo-google-fonts/noto-sans-gurmukhi/800ExtraBold';
import { NotoSansGurmukhi_900Black } from '@expo-google-fonts/noto-sans-gurmukhi/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    NotoSansGurmukhi_100Thin, 
    NotoSansGurmukhi_200ExtraLight, 
    NotoSansGurmukhi_300Light, 
    NotoSansGurmukhi_400Regular, 
    NotoSansGurmukhi_500Medium, 
    NotoSansGurmukhi_600SemiBold, 
    NotoSansGurmukhi_700Bold, 
    NotoSansGurmukhi_800ExtraBold, 
    NotoSansGurmukhi_900Black
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
          fontFamily: "NotoSansGurmukhi_100Thin"
        }}>
          Noto Sans Gurmukhi Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansGurmukhi_200ExtraLight"
        }}>
          Noto Sans Gurmukhi Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansGurmukhi_300Light"
        }}>
          Noto Sans Gurmukhi Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansGurmukhi_400Regular"
        }}>
          Noto Sans Gurmukhi Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansGurmukhi_500Medium"
        }}>
          Noto Sans Gurmukhi Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansGurmukhi_600SemiBold"
        }}>
          Noto Sans Gurmukhi Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansGurmukhi_700Bold"
        }}>
          Noto Sans Gurmukhi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansGurmukhi_800ExtraBold"
        }}>
          Noto Sans Gurmukhi Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoSansGurmukhi_900Black"
        }}>
          Noto Sans Gurmukhi Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NotoSansGurmukhi_100Thin](./100Thin/NotoSansGurmukhi_100Thin.ttf.png)|![NotoSansGurmukhi_200ExtraLight](./200ExtraLight/NotoSansGurmukhi_200ExtraLight.ttf.png)|![NotoSansGurmukhi_300Light](./300Light/NotoSansGurmukhi_300Light.ttf.png)||
|![NotoSansGurmukhi_400Regular](./400Regular/NotoSansGurmukhi_400Regular.ttf.png)|![NotoSansGurmukhi_500Medium](./500Medium/NotoSansGurmukhi_500Medium.ttf.png)|![NotoSansGurmukhi_600SemiBold](./600SemiBold/NotoSansGurmukhi_600SemiBold.ttf.png)||
|![NotoSansGurmukhi_700Bold](./700Bold/NotoSansGurmukhi_700Bold.ttf.png)|![NotoSansGurmukhi_800ExtraBold](./800ExtraBold/NotoSansGurmukhi_800ExtraBold.ttf.png)|![NotoSansGurmukhi_900Black](./900Black/NotoSansGurmukhi_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/noto-sans-gurmukhi` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Sans Gurmukhi page on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Gurmukhi) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Sans Gurmukhi on Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Gurmukhi)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-sans-gurmukhi)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-sans-gurmukhi)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
