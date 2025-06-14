# @expo-google-fonts/ysabeau-sc

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/ysabeau-sc)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/ysabeau-sc)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/ysabeau-sc)

This package lets you use the [**Ysabeau SC**](https://fonts.google.com/specimen/Ysabeau+SC) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Ysabeau SC

![Ysabeau SC](./font-family.png)

This font family contains [9 styles](#-gallery).

- `YsabeauSC_100Thin`
- `YsabeauSC_200ExtraLight`
- `YsabeauSC_300Light`
- `YsabeauSC_400Regular`
- `YsabeauSC_500Medium`
- `YsabeauSC_600SemiBold`
- `YsabeauSC_700Bold`
- `YsabeauSC_800ExtraBold`
- `YsabeauSC_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/ysabeau-sc expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/ysabeau-sc/useFonts';
import { YsabeauSC_100Thin } from '@expo-google-fonts/ysabeau-sc/100Thin';
import { YsabeauSC_200ExtraLight } from '@expo-google-fonts/ysabeau-sc/200ExtraLight';
import { YsabeauSC_300Light } from '@expo-google-fonts/ysabeau-sc/300Light';
import { YsabeauSC_400Regular } from '@expo-google-fonts/ysabeau-sc/400Regular';
import { YsabeauSC_500Medium } from '@expo-google-fonts/ysabeau-sc/500Medium';
import { YsabeauSC_600SemiBold } from '@expo-google-fonts/ysabeau-sc/600SemiBold';
import { YsabeauSC_700Bold } from '@expo-google-fonts/ysabeau-sc/700Bold';
import { YsabeauSC_800ExtraBold } from '@expo-google-fonts/ysabeau-sc/800ExtraBold';
import { YsabeauSC_900Black } from '@expo-google-fonts/ysabeau-sc/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    YsabeauSC_100Thin, 
    YsabeauSC_200ExtraLight, 
    YsabeauSC_300Light, 
    YsabeauSC_400Regular, 
    YsabeauSC_500Medium, 
    YsabeauSC_600SemiBold, 
    YsabeauSC_700Bold, 
    YsabeauSC_800ExtraBold, 
    YsabeauSC_900Black
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
          fontFamily: "YsabeauSC_100Thin"
        }}>
          Ysabeau SC Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "YsabeauSC_200ExtraLight"
        }}>
          Ysabeau SC Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "YsabeauSC_300Light"
        }}>
          Ysabeau SC Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "YsabeauSC_400Regular"
        }}>
          Ysabeau SC Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "YsabeauSC_500Medium"
        }}>
          Ysabeau SC Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "YsabeauSC_600SemiBold"
        }}>
          Ysabeau SC Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "YsabeauSC_700Bold"
        }}>
          Ysabeau SC Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "YsabeauSC_800ExtraBold"
        }}>
          Ysabeau SC Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "YsabeauSC_900Black"
        }}>
          Ysabeau SC Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![YsabeauSC_100Thin](./100Thin/YsabeauSC_100Thin.ttf.png)|![YsabeauSC_200ExtraLight](./200ExtraLight/YsabeauSC_200ExtraLight.ttf.png)|![YsabeauSC_300Light](./300Light/YsabeauSC_300Light.ttf.png)||
|![YsabeauSC_400Regular](./400Regular/YsabeauSC_400Regular.ttf.png)|![YsabeauSC_500Medium](./500Medium/YsabeauSC_500Medium.ttf.png)|![YsabeauSC_600SemiBold](./600SemiBold/YsabeauSC_600SemiBold.ttf.png)||
|![YsabeauSC_700Bold](./700Bold/YsabeauSC_700Bold.ttf.png)|![YsabeauSC_800ExtraBold](./800ExtraBold/YsabeauSC_800ExtraBold.ttf.png)|![YsabeauSC_900Black](./900Black/YsabeauSC_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/ysabeau-sc` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Ysabeau SC page on Google Fonts](https://fonts.google.com/specimen/Ysabeau+SC) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Ysabeau SC on Google Fonts](https://fonts.google.com/specimen/Ysabeau+SC)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/ysabeau-sc)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/ysabeau-sc)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
