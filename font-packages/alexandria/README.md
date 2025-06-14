# @expo-google-fonts/alexandria

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/alexandria)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/alexandria)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/alexandria)

This package lets you use the [**Alexandria**](https://fonts.google.com/specimen/Alexandria) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Alexandria

![Alexandria](./font-family.png)

This font family contains [9 styles](#-gallery).

- `Alexandria_100Thin`
- `Alexandria_200ExtraLight`
- `Alexandria_300Light`
- `Alexandria_400Regular`
- `Alexandria_500Medium`
- `Alexandria_600SemiBold`
- `Alexandria_700Bold`
- `Alexandria_800ExtraBold`
- `Alexandria_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/alexandria expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/alexandria/useFonts';
import { Alexandria_100Thin } from '@expo-google-fonts/alexandria/100Thin';
import { Alexandria_200ExtraLight } from '@expo-google-fonts/alexandria/200ExtraLight';
import { Alexandria_300Light } from '@expo-google-fonts/alexandria/300Light';
import { Alexandria_400Regular } from '@expo-google-fonts/alexandria/400Regular';
import { Alexandria_500Medium } from '@expo-google-fonts/alexandria/500Medium';
import { Alexandria_600SemiBold } from '@expo-google-fonts/alexandria/600SemiBold';
import { Alexandria_700Bold } from '@expo-google-fonts/alexandria/700Bold';
import { Alexandria_800ExtraBold } from '@expo-google-fonts/alexandria/800ExtraBold';
import { Alexandria_900Black } from '@expo-google-fonts/alexandria/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    Alexandria_100Thin, 
    Alexandria_200ExtraLight, 
    Alexandria_300Light, 
    Alexandria_400Regular, 
    Alexandria_500Medium, 
    Alexandria_600SemiBold, 
    Alexandria_700Bold, 
    Alexandria_800ExtraBold, 
    Alexandria_900Black
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
          fontFamily: "Alexandria_100Thin"
        }}>
          Alexandria Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Alexandria_200ExtraLight"
        }}>
          Alexandria Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Alexandria_300Light"
        }}>
          Alexandria Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Alexandria_400Regular"
        }}>
          Alexandria Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Alexandria_500Medium"
        }}>
          Alexandria Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Alexandria_600SemiBold"
        }}>
          Alexandria Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Alexandria_700Bold"
        }}>
          Alexandria Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Alexandria_800ExtraBold"
        }}>
          Alexandria Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Alexandria_900Black"
        }}>
          Alexandria Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Alexandria_100Thin](./100Thin/Alexandria_100Thin.ttf.png)|![Alexandria_200ExtraLight](./200ExtraLight/Alexandria_200ExtraLight.ttf.png)|![Alexandria_300Light](./300Light/Alexandria_300Light.ttf.png)||
|![Alexandria_400Regular](./400Regular/Alexandria_400Regular.ttf.png)|![Alexandria_500Medium](./500Medium/Alexandria_500Medium.ttf.png)|![Alexandria_600SemiBold](./600SemiBold/Alexandria_600SemiBold.ttf.png)||
|![Alexandria_700Bold](./700Bold/Alexandria_700Bold.ttf.png)|![Alexandria_800ExtraBold](./800ExtraBold/Alexandria_800ExtraBold.ttf.png)|![Alexandria_900Black](./900Black/Alexandria_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/alexandria` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Alexandria page on Google Fonts](https://fonts.google.com/specimen/Alexandria) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Alexandria on Google Fonts](https://fonts.google.com/specimen/Alexandria)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/alexandria)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/alexandria)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
