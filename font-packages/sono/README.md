# @expo-google-fonts/sono

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/sono)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/sono)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/sono)

This package lets you use the [**Sono**](https://fonts.google.com/specimen/Sono) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Sono

![Sono](./font-family.png)

This font family contains [7 styles](#-gallery).

- `Sono_200ExtraLight`
- `Sono_300Light`
- `Sono_400Regular`
- `Sono_500Medium`
- `Sono_600SemiBold`
- `Sono_700Bold`
- `Sono_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/sono expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/sono/useFonts';
import { Sono_200ExtraLight } from '@expo-google-fonts/sono/200ExtraLight';
import { Sono_300Light } from '@expo-google-fonts/sono/300Light';
import { Sono_400Regular } from '@expo-google-fonts/sono/400Regular';
import { Sono_500Medium } from '@expo-google-fonts/sono/500Medium';
import { Sono_600SemiBold } from '@expo-google-fonts/sono/600SemiBold';
import { Sono_700Bold } from '@expo-google-fonts/sono/700Bold';
import { Sono_800ExtraBold } from '@expo-google-fonts/sono/800ExtraBold';

export default () => {

  let [fontsLoaded] = useFonts({
    Sono_200ExtraLight, 
    Sono_300Light, 
    Sono_400Regular, 
    Sono_500Medium, 
    Sono_600SemiBold, 
    Sono_700Bold, 
    Sono_800ExtraBold
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
          fontFamily: "Sono_200ExtraLight"
        }}>
          Sono Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Sono_300Light"
        }}>
          Sono Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Sono_400Regular"
        }}>
          Sono Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Sono_500Medium"
        }}>
          Sono Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Sono_600SemiBold"
        }}>
          Sono Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Sono_700Bold"
        }}>
          Sono Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Sono_800ExtraBold"
        }}>
          Sono Extra Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Sono_200ExtraLight](./200ExtraLight/Sono_200ExtraLight.ttf.png)|![Sono_300Light](./300Light/Sono_300Light.ttf.png)|![Sono_400Regular](./400Regular/Sono_400Regular.ttf.png)||
|![Sono_500Medium](./500Medium/Sono_500Medium.ttf.png)|![Sono_600SemiBold](./600SemiBold/Sono_600SemiBold.ttf.png)|![Sono_700Bold](./700Bold/Sono_700Bold.ttf.png)||
|![Sono_800ExtraBold](./800ExtraBold/Sono_800ExtraBold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/sono` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Sono page on Google Fonts](https://fonts.google.com/specimen/Sono) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Sono on Google Fonts](https://fonts.google.com/specimen/Sono)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/sono)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/sono)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
