# @expo-google-fonts/saira-semi-condensed

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/saira-semi-condensed)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/saira-semi-condensed)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/saira-semi-condensed)

This package lets you use the [**Saira Semi Condensed**](https://fonts.google.com/specimen/Saira+Semi+Condensed) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Saira Semi Condensed

![Saira Semi Condensed](./font-family.png)

This font family contains [9 styles](#-gallery).

- `SairaSemiCondensed_100Thin`
- `SairaSemiCondensed_200ExtraLight`
- `SairaSemiCondensed_300Light`
- `SairaSemiCondensed_400Regular`
- `SairaSemiCondensed_500Medium`
- `SairaSemiCondensed_600SemiBold`
- `SairaSemiCondensed_700Bold`
- `SairaSemiCondensed_800ExtraBold`
- `SairaSemiCondensed_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/saira-semi-condensed expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/saira-semi-condensed/useFonts';
import { SairaSemiCondensed_100Thin } from '@expo-google-fonts/saira-semi-condensed/100Thin';
import { SairaSemiCondensed_200ExtraLight } from '@expo-google-fonts/saira-semi-condensed/200ExtraLight';
import { SairaSemiCondensed_300Light } from '@expo-google-fonts/saira-semi-condensed/300Light';
import { SairaSemiCondensed_400Regular } from '@expo-google-fonts/saira-semi-condensed/400Regular';
import { SairaSemiCondensed_500Medium } from '@expo-google-fonts/saira-semi-condensed/500Medium';
import { SairaSemiCondensed_600SemiBold } from '@expo-google-fonts/saira-semi-condensed/600SemiBold';
import { SairaSemiCondensed_700Bold } from '@expo-google-fonts/saira-semi-condensed/700Bold';
import { SairaSemiCondensed_800ExtraBold } from '@expo-google-fonts/saira-semi-condensed/800ExtraBold';
import { SairaSemiCondensed_900Black } from '@expo-google-fonts/saira-semi-condensed/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    SairaSemiCondensed_100Thin, 
    SairaSemiCondensed_200ExtraLight, 
    SairaSemiCondensed_300Light, 
    SairaSemiCondensed_400Regular, 
    SairaSemiCondensed_500Medium, 
    SairaSemiCondensed_600SemiBold, 
    SairaSemiCondensed_700Bold, 
    SairaSemiCondensed_800ExtraBold, 
    SairaSemiCondensed_900Black
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
          fontFamily: "SairaSemiCondensed_100Thin"
        }}>
          Saira Semi Condensed Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SairaSemiCondensed_200ExtraLight"
        }}>
          Saira Semi Condensed Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SairaSemiCondensed_300Light"
        }}>
          Saira Semi Condensed Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SairaSemiCondensed_400Regular"
        }}>
          Saira Semi Condensed Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SairaSemiCondensed_500Medium"
        }}>
          Saira Semi Condensed Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SairaSemiCondensed_600SemiBold"
        }}>
          Saira Semi Condensed Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SairaSemiCondensed_700Bold"
        }}>
          Saira Semi Condensed Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SairaSemiCondensed_800ExtraBold"
        }}>
          Saira Semi Condensed Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SairaSemiCondensed_900Black"
        }}>
          Saira Semi Condensed Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![SairaSemiCondensed_100Thin](./100Thin/SairaSemiCondensed_100Thin.ttf.png)|![SairaSemiCondensed_200ExtraLight](./200ExtraLight/SairaSemiCondensed_200ExtraLight.ttf.png)|![SairaSemiCondensed_300Light](./300Light/SairaSemiCondensed_300Light.ttf.png)||
|![SairaSemiCondensed_400Regular](./400Regular/SairaSemiCondensed_400Regular.ttf.png)|![SairaSemiCondensed_500Medium](./500Medium/SairaSemiCondensed_500Medium.ttf.png)|![SairaSemiCondensed_600SemiBold](./600SemiBold/SairaSemiCondensed_600SemiBold.ttf.png)||
|![SairaSemiCondensed_700Bold](./700Bold/SairaSemiCondensed_700Bold.ttf.png)|![SairaSemiCondensed_800ExtraBold](./800ExtraBold/SairaSemiCondensed_800ExtraBold.ttf.png)|![SairaSemiCondensed_900Black](./900Black/SairaSemiCondensed_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/saira-semi-condensed` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Saira Semi Condensed page on Google Fonts](https://fonts.google.com/specimen/Saira+Semi+Condensed) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Saira Semi Condensed on Google Fonts](https://fonts.google.com/specimen/Saira+Semi+Condensed)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/saira-semi-condensed)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/saira-semi-condensed)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
