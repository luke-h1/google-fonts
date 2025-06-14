# @expo-google-fonts/lateef

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/lateef)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/lateef)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/lateef)

This package lets you use the [**Lateef**](https://fonts.google.com/specimen/Lateef) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Lateef

![Lateef](./font-family.png)

This font family contains [7 styles](#-gallery).

- `Lateef_200ExtraLight`
- `Lateef_300Light`
- `Lateef_400Regular`
- `Lateef_500Medium`
- `Lateef_600SemiBold`
- `Lateef_700Bold`
- `Lateef_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/lateef expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/lateef/useFonts';
import { Lateef_200ExtraLight } from '@expo-google-fonts/lateef/200ExtraLight';
import { Lateef_300Light } from '@expo-google-fonts/lateef/300Light';
import { Lateef_400Regular } from '@expo-google-fonts/lateef/400Regular';
import { Lateef_500Medium } from '@expo-google-fonts/lateef/500Medium';
import { Lateef_600SemiBold } from '@expo-google-fonts/lateef/600SemiBold';
import { Lateef_700Bold } from '@expo-google-fonts/lateef/700Bold';
import { Lateef_800ExtraBold } from '@expo-google-fonts/lateef/800ExtraBold';

export default () => {

  let [fontsLoaded] = useFonts({
    Lateef_200ExtraLight, 
    Lateef_300Light, 
    Lateef_400Regular, 
    Lateef_500Medium, 
    Lateef_600SemiBold, 
    Lateef_700Bold, 
    Lateef_800ExtraBold
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
          fontFamily: "Lateef_200ExtraLight"
        }}>
          Lateef Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Lateef_300Light"
        }}>
          Lateef Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Lateef_400Regular"
        }}>
          Lateef Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Lateef_500Medium"
        }}>
          Lateef Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Lateef_600SemiBold"
        }}>
          Lateef Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Lateef_700Bold"
        }}>
          Lateef Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Lateef_800ExtraBold"
        }}>
          Lateef Extra Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Lateef_200ExtraLight](./200ExtraLight/Lateef_200ExtraLight.ttf.png)|![Lateef_300Light](./300Light/Lateef_300Light.ttf.png)|![Lateef_400Regular](./400Regular/Lateef_400Regular.ttf.png)||
|![Lateef_500Medium](./500Medium/Lateef_500Medium.ttf.png)|![Lateef_600SemiBold](./600SemiBold/Lateef_600SemiBold.ttf.png)|![Lateef_700Bold](./700Bold/Lateef_700Bold.ttf.png)||
|![Lateef_800ExtraBold](./800ExtraBold/Lateef_800ExtraBold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/lateef` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Lateef page on Google Fonts](https://fonts.google.com/specimen/Lateef) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Lateef on Google Fonts](https://fonts.google.com/specimen/Lateef)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/lateef)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/lateef)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
